import * as muiLocales from '@mui/material/locale/index.js';
import useLocale from './useLocale.js';

type MUILocalesIndexType = {
  [k: string]: typeof muiLocales[keyof typeof muiLocales];
};

export default function useMUILocale() {
  const [locale] = useLocale();
  const [lang] = locale.split('-');

  const muiLocaleKey = locale.replace('-', '');

  let muiLocale = (muiLocales as MUILocalesIndexType)[muiLocaleKey];

  if (muiLocale) {
    return muiLocale;
  }

  muiLocale = Object.entries(muiLocales).find(([locale]) =>
    locale.startsWith(lang)
  )!?.[1];

  if (muiLocale) {
    return muiLocale;
  }

  return muiLocales.enUS;
}
