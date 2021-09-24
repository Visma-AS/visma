import { create } from '@postinumero/use-async';
import useLocale from './useLocale.js';

const [, , useImportSafe] = create(
  (locale: string) =>
    import(
      /* webpackChunkName: "date-fns-locale.[request]" */
      // TODO: get list from process.env.REACT_APP_LOCALES
      /* webpackInclude: /(da|en-US|es|fi|lt|lv|nb|nl|ro|sv)[\\/]index\.js$/ */
      `date-fns/locale/${locale}`
    )
);

export default function useDateFnsLocale() {
  const [locale] = useLocale();
  const [lang] = locale.split('-');
  // TODO: map to available date-fns locale, import just one using useImport
  const [, primary] = useImportSafe(locale);
  const [, secondary] = useImportSafe(lang);

  return (primary ?? secondary).default;
}
