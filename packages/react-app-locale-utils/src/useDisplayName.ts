import displayNames from './displayNames.js';
import useLocale from './useLocale.js';

export default function useDisplayName() {
  const [locale] = useLocale();

  return displayNames.find((displayName) => displayName.locale === locale)!
    .value;
}
