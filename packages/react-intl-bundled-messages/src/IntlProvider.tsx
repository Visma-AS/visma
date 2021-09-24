import { useLocale } from '@visma/react-app-locale-utils';
import defaultLocaleValue from '@visma/react-app-locale-utils/lib/defaultLocale.js';
import React from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';
import useMessages from './useMessages.js';

export default function IntlProvider({
  locale,
  defaultLocale = defaultLocaleValue,
  messages,
  ...otherProps
}: {
  locale?: string;
  [otherOptions: string]: any;
}) {
  const [localeSetting] = useLocale();
  locale = locale ?? (localeSetting as string);

  return (
    <ReactIntlProvider
      messages={{
        ...useMessages({ locale, defaultLocale }),
        ...messages,
      }}
      locale={locale}
      defaultLocale={defaultLocale}
      {...otherProps}
    />
  );
}
