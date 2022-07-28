/* eslint-disable no-console */

import { compile, extract } from '@formatjs/cli';
import defaultLocale from '@visma/react-app-locale-utils/lib/defaultLocale.js';
import locales from '@visma/react-app-locale-utils/lib/locales.js';
import target from '@visma/react-intl-bundled-messages/lib/target.js';
import fg from 'fast-glob';
import fsExtra from 'fs-extra';
import { mkdir, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname } from 'node:path';
import { readPackageUp } from 'read-pkg-up';

const source = 'lang';

async function main() {
  let appDirectory = 'src';

  try {
    const { readConfig } = await import('@remix-run/dev/dist/config.js');
    appDirectory = (await readConfig()).appDirectory;
  } catch {}

  const resultAsString = await extract(
    await fg([`${appDirectory}/**/*.{j,t}s{,x}`, `!**/*.d.ts`]),
    {
      idInterpolationPattern: '[sha512:contenthash:base64:6]',
    }
  );

  await mkdir(source, { recursive: true });

  await writeFile(`${source}/${defaultLocale}.json`, resultAsString);

  await mkdir(target, { recursive: true });
  await fsExtra.emptyDir(target);

  console.log('Compiling messages...');

  const pseudoLocales = ['en-XA', 'xx-AC', 'xx-HA', 'xx-LS'];

  const dependencyPaths = await getDependencyPaths();
  const defaultLocaleFiles = getFiles(dependencyPaths, defaultLocale);

  for (const locale of locales) {
    const isPseudoLocale = pseudoLocales.includes(locale);
    const files =
      isPseudoLocale || locale === defaultLocale
        ? defaultLocaleFiles
        : getFiles(dependencyPaths, locale);

    if (files.length) {
      console.log({ locale, isPseudoLocale, files });

      const result = await compile(files, {
        ast: true,
        pseudoLocale: isPseudoLocale ? locale : undefined,
      });

      await writeFile(`${target}/${locale}.json`, result);
    } else {
      console.log(`Skipping ${locale}. No files found.`);
    }
  }

  console.log('Done!');
}

main();

// By a convention, we expect libraries to have pre-translated strings in
// lang directory.
// https://formatjs.io/docs/guides/distribute-libraries/#declaring-with-a-convention
const getFiles = (dependencyPaths: string[], locale: string) =>
  dependencyPaths
    .map((path) => `${path}/${source}/${locale}.json`)
    .filter(fsExtra.pathExistsSync);

async function getDependencyPaths() {
  const dependenciesSet = new Set<string>();

  await (async function recur(relativePath) {
    const packageUp = await readPackageUp({ cwd: relativePath });
    if (packageUp) {
      const { path, packageJson } = packageUp;
      const require = createRequire(`file://${dirname(path)}`);
      if (!dependenciesSet.has(path)) {
        dependenciesSet.add(path);
        const dependencies = Object.keys(packageJson.dependencies ?? []);
        for (const dependency of dependencies) {
          try {
            const path = require.resolve(dependency);
            await recur(path);
          } catch {}
        }
      }
    }
  })(process.cwd());

  return [...dependenciesSet].map((path) => dirname(path));
}
