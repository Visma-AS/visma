// @codegen
require('dotenv/config');
const fg = require('fast-glob');
const path = require('path');
const uniq = require('lodash/uniq');

const localeDir = path.dirname(require.resolve('date-fns/locale'));
const availableLocales = fg
  .sync(`${localeDir}/*`, { onlyDirectories: true })
  .map((localePath) => path.basename(localePath));

const fallback = 'en-US';

const dateFnsLocales = JSON.parse(process.env.REACT_APP_LOCALES).reduce(
  (dateFnsLocales, locale) => {
    const primary = locale;
    const [lang] = locale.split('-');
    const secondary = lang;

    dateFnsLocales[locale] = [primary, secondary, fallback].find((locale) =>
      availableLocales.includes(locale)
    );
    return dateFnsLocales;
  },
  {}
);

const dateFnsLocaleValuesUniq = uniq(Object.values(dateFnsLocales));

/**
 * @type {function(): import('date-fns').Locale}
 */
module.exports = `import { create } from '@postinumero/use-async';
import useLocale from './useLocale.js';

const dateFnsLocales = ${JSON.stringify(dateFnsLocales)};

const [useImport] = create((locale) =>
  import(
    /* webpackChunkName: "date-fns-locale.[request]" */
    // TODO: get list from process.env.REACT_APP_LOCALES
    /* webpackInclude: /(${dateFnsLocaleValuesUniq.join(
      '|'
    )})[\\/]index\.js$/ */
    \`date-fns/locale/\${locale}\`
  )
);

export default function useDateFnsLocale() {
  const [locale] = useLocale();

  return useImport(dateFnsLocales[locale]).default;
}`;
