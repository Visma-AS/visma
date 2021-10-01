import * as muiLocales from '@material-ui/core/locale/index.js';
import useLocale from './useLocale.js';

type MUILocalesIndexType = {
  [k: string]: typeof muiLocales[keyof typeof muiLocales];
};

export default function useMaterialUILocale() {
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
