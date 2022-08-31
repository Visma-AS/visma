import { useEffect } from 'react';
import { useIntl } from 'react-intl';

export default function SetDocumentLang() {
  const { locale } = useIntl();

  useEffect(() => {
    document.documentElement.lang = locale.split('-')[0]!;
  }, [locale]);

  return null;
}
