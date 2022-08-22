import { create } from '@postinumero/use-async';
import dateFnsLocaleDynamicImports from '@visma/vite-plugin-date-fns-locale/dynamic-import-date-fns-locales';
import useLocale from './useLocale.js';

const [useImportDateFnsLocale] = create((locale: string) =>
  dateFnsLocaleDynamicImports[locale]!()
);

export default function useDateFnsLocaleVite() {
  const [locale] = useLocale();

  return useImportDateFnsLocale(locale).default;
}
