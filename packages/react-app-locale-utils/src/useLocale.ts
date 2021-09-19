import useLocalStorageJson from '@postinumero/storage/lib/useLocalStorageJson';
import { useMemo } from 'react';
import defaultLocale from './defaultLocale.js';

export default function useLocale() {
  const [locale, setLocale] = useLocalStorageJson('locale');
  const localeValue = locale ?? defaultLocale;

  return useMemo(() => [localeValue, setLocale], [localeValue, setLocale]);
}
