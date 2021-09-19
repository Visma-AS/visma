import { create } from '@postinumero/use-async';
import useLocale from './useLocale.js';

const [, , useLoaderSafe] = create(
  (locale: string) =>
    import(
      /* webpackChunkName: "date-fns-locale.[request]" */
      /* webpackInclude: /(da|en-US|es|fi|lt|lv|nb|nl|ro|sv)[\\/]index\.js$/ */
      `date-fns/locale/${locale}`
    )
);

export default function useDateFnsLocale() {
  const [locale] = useLocale();
  const [lang] = locale.split('-');

  const [, primary] = useLoaderSafe(locale);
  const [, secondary] = useLoaderSafe(lang);

  return (primary ?? secondary).default;
}
