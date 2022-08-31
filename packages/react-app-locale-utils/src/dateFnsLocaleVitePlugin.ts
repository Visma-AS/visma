import '@visma/public.config/config';
import { createHash } from 'crypto';
import fg from 'fast-glob';
import fs from 'fs-extra';
import { createRequire } from 'node:module';
import * as path from 'node:path';
import * as url from 'url';
import type { Plugin } from 'vite';

const require = createRequire(import.meta.url);

function getAvailableLocales() {
  try {
    const localeDir = path.dirname(require.resolve('date-fns/locale'));
    return fg
      .sync(`${localeDir}/*`, { onlyDirectories: true })
      .map((localePath) => path.basename(localePath));
  } catch {
    return [];
  }
}

const availableLocales = getAvailableLocales();

const fallback = globalThis.ENV?.LOCALES?.[0];

const dateFnsLocales = (globalThis.ENV?.LOCALES ?? []).map((locale) => {
  const primary = locale;
  const [lang] = locale.split('-');
  const secondary = lang;
  const primaryFallback = fallback;
  const [langFallback] = primaryFallback?.split('-') ?? [];
  const secondaryFallback = langFallback;

  const dateFnsLocale = [primary, secondary, primaryFallback, secondaryFallback]
    .filter(Boolean)
    .find((locale) => availableLocales.includes(locale!));

  return [locale, dateFnsLocale];
});

const dateFnsLocaleVitePlugin = createPlugin(
  '@visma/vite-plugin-date-fns-locale',
  'dynamic-import-date-fns-locales',
  `export default {
  ${dateFnsLocales
    .map(
      ([locale, dateFnsLocale]) =>
        `  "${locale}": () => import("date-fns/locale/${dateFnsLocale}"),
  `
    )
    .join('')}}`
);

export default dateFnsLocaleVitePlugin;

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
