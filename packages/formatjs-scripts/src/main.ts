/* eslint-disable no-console */

import { compile, extract } from '@formatjs/cli';
import defaultLocale from '@visma/react-app-locale-utils/lib/defaultLocale.js';
import locales from '@visma/react-app-locale-utils/lib/locales.js';
import target from '@visma/react-intl-bundled-messages/lib/target.js';
import fg from 'fast-glob';
import fsExtra from 'fs-extra';
import { mkdir, writeFile } from 'fs/promises';

const source = 'lang';

async function main() {
  let appDirectory = 'src';
  let isWorkspace = false;

  try {
    const config = new Function(
      `const module = {};
${await fsExtra.readFile('remix.config.js')}
return module.exports;`
    )();
    appDirectory = config.appDirectory ?? 'app';
  } catch {
    try {
      const packageJson = await fsExtra.readJson('../../package.json');
      if (packageJson.workspaces) {
        appDirectory = '../*/src';
        isWorkspace = true;
      }
    } catch {}
  }

  const resultAsString = await extract(
    await fg(`${appDirectory}/**/*.{j,t}s{,x}`),
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

  const getFiles = async (locale: string) => [
    ...(await fg(`${source}/${locale}.json`, { followSymbolicLinks: false })),
    // By a convention, we expect libraries to have pre-translated strings in
    // lang directory.
    // https://formatjs.io/docs/guides/distribute-libraries/#declaring-with-a-convention
    ...(await fg(
      `${isWorkspace ? '../../' : ''}node_modules/**/${source}/${locale}.json`
    )),
  ];

  const defaultLocaleFiles = await getFiles(defaultLocale);

  for (const locale of locales) {
    const isPseudoLocale = pseudoLocales.includes(locale);
    const files =
      isPseudoLocale || locale === defaultLocale
        ? defaultLocaleFiles
        : await getFiles(locale);

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
