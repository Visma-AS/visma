#!/usr/bin/env node
import { camelCase } from 'lodash-es';
import { OpenAPIClientAxios } from 'openapi-client-axios';
import { basename, dirname, extname, relative } from 'path';
import { writeFile } from 'fs/promises';
import { generateTypesForDocument } from 'openapi-client-axios-typegen';
import tss from 'typescript';

const mapToString = (array, fn) => array.map(fn).join('\n');

const definition = process.argv[2];
const target = process.argv[3];

const isTypeScript = extname(target) === '.ts';

const api = new OpenAPIClientAxios({ definition });
await api.init();

const operations = api.getOperations().map((operation) => ({
  ...operation,
  variableName: camelCase(operation.operationId),
}));

const getterOperations = operations
  .filter(({ method }) => method === 'get')
  .map((operation) => ({
    ...operation,
    operationIdWithoutGetPrefix: operation.operationId.startsWith('get')
      ? operation.operationId.slice(3)
      : operation.operationId,
  }));

const opts = {
  transformOperationName: (operation) => operation,
};

const [imports, schemaTypes, operationTypings] = await generateTypesForDocument(
  definition,
  opts
);

const content = `${imports}
import { Document } from 'openapi-client-axios';
import OpenAPIClientAxios from 'openapi-client-axios';
import { create } from '@postinumero/use-async';
import definition from '${[
  '.',
  relative(dirname(target), dirname(definition)),
  basename(definition),
]
  .filter(Boolean)
  .join('/')}';

${schemaTypes.replaceAll('declare', 'export declare')}${operationTypings}

// Copied from the standard library and renamed to FunctionParameters
// because the name Parameters clashes with openapi-client-axios.
/**
 * Obtain the parameters of a function type in a tuple
 */
type FunctionParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

const api = new OpenAPIClientAxios({ definition: definition as Document });

export const clientPromise = api.init<Client>();

${mapToString(
  operations,
  ({ operationId, variableName }) =>
    `export async function ${camelCase(
      `${variableName}-raw`
    )}(...args: FunctionParameters<OperationMethods['${operationId}']>) {
  const client = await clientPromise;
  return await client['${operationId}'](...args);
};
`
)}
${mapToString(
  operations,
  ({ operationId, variableName }) =>
    `export async function ${variableName}(...args: FunctionParameters<OperationMethods['${operationId}']>) {
  const response = await ${camelCase(`${variableName}-raw`)}(...args);
  return response.data;
};
`
)}
${mapToString(
  getterOperations,
  ({
    operationId,
    operationIdWithoutGetPrefix,
    variableName,
  }) => `export const [${camelCase(
    `use-${operationIdWithoutGetPrefix}-raw`
  )}, ${camelCase(`refetch-${operationIdWithoutGetPrefix}`)}, ${camelCase(
    `use-${operationIdWithoutGetPrefix}-raw-safe`
  )}] = create(${camelCase(`${variableName}-raw`)});
`
)}
${mapToString(
  getterOperations,
  ({
    operationId,
    operationIdWithoutGetPrefix,
    variableName,
  }) => `export function ${camelCase(
    `use-${operationIdWithoutGetPrefix}`
  )}(...args: FunctionParameters<OperationMethods['${operationId}']>) {
  return ${camelCase(`use-${operationIdWithoutGetPrefix}-raw`)}(...args).data;
}
`
)}
${mapToString(
  getterOperations,
  ({
    operationId,
    operationIdWithoutGetPrefix,
    variableName,
  }) => `export function ${camelCase(
    `use-${operationIdWithoutGetPrefix}-safe`
  )}(...args: FunctionParameters<OperationMethods['${operationId}']>) {
  const [error, response] = ${camelCase(
    `use-${operationIdWithoutGetPrefix}-raw-safe`
  )}(...args)
  return [error, response?.data];
}
`
)}`;

await writeFile(
  target,
  isTypeScript
    ? content
    : tss.transpileModule(content, {
        compilerOptions: {
          target: tss.ScriptTarget.Latest,
          module: tss.ModuleKind.ESNext,
        },
      }).outputText
);
