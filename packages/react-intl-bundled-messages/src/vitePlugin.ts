import '@visma/public.config/config';
import { createHash } from 'crypto';
import fs from 'fs-extra';
import * as path from 'node:path';
import * as url from 'url';
import type { Plugin } from 'vite';
import target from './target.js';

const availableMessageFiles = fs.pathExistsSync(target)
  ? fs.readdirSync(target)
  : [];

const reactIntlBundledMessagesPlugin = createPlugin(
  '@visma/vite-plugin-react-intl-bundled-messages',
  'dynamic-import-messages',
  `export default {
  ${(globalThis.ENV?.LOCALES ?? [])
    .map((locale) => [locale, `${locale}.json`])
    .filter(([_locale, fileName]) => availableMessageFiles.includes(fileName!))
    .map(
      ([locale, fileName]) =>
        `  "${locale}": () => import("${path.resolve(target)}/${fileName}"),
  `
    )
    .join('')}}`
);

export default reactIntlBundledMessagesPlugin;

function createPlugin(name: string, aliasPath: string, data: string): Plugin {
  function getHashDigest(content: string) {
    const hasher = createHash('sha256');
    hasher.update(content);
    return hasher.digest('hex').slice(0, 10);
  }

  const tempDir = './.temp';
  const fileURL = new URL(
    `${tempDir}/${getHashDigest(data)}.js`,
    import.meta.url
  );

  return {
    name,
    buildStart() {
      fs.ensureDirSync(url.fileURLToPath(new URL(tempDir, import.meta.url)));
      fs.writeFileSync(fileURL, data);
    },
    config: () => ({
      resolve: {
        alias: {
          [`${name}/${aliasPath}`]: url.fileURLToPath(fileURL),
        },
      },
    }),
  };
}
