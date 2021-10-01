import { defaultLocale } from '.';
import locales from './locales.js';

declare namespace Intl {
  interface Collator {
    compare(a: string, b: string): number;
  }
  const Collator: {
    prototype: Collator;
    new (locales?: string | string[], options?: any): Collator;
  };

  interface DisplayNames {
    of(code: string): string;
  }
  const DisplayNames: {
    prototype: DisplayNames;
    new (locales?: string | string[], options?: any): DisplayNames;
  };
}

type RegionAndLanguage = {
  locale: string;
  region: string;
  language: string;
};

type DisplayName = {
  locale: string;
  value: string;
};

const regionsAndLanguages: RegionAndLanguage[] = locales.map(
  (locale: string) => {
    const [language, region] = locale.split('-');

    return {
      locale,
      region: new Intl.DisplayNames(locale, {
        type: 'region',
      }).of(region!),

      language: new Intl.DisplayNames(locale, {
        type: 'language',
      }).of(language!),
    };
  }
);

const compare = new Intl.Collator(defaultLocale).compare;

const displayNames: DisplayName[] = regionsAndLanguages.map(
  (regionAndLanguage) => ({
    locale: regionAndLanguage.locale,
    value: regionsAndLanguages.some(
      (regionAndLanguageValue) =>
        regionAndLanguage !== regionAndLanguageValue &&
        regionAndLanguage.language === regionAndLanguageValue.language
    )
      ? `${regionAndLanguage.language} (${regionAndLanguage.region})`
      : regionAndLanguage.language,
  })
);

const displayNamesSorted = displayNames.sort((a, b) =>
  compare(a.value, b.value)
);

export default displayNamesSorted;
