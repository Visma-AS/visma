import { create } from '@postinumero/use-async';

const [, , useLocaleMessagesSafe] = create(
  (locale: string) =>
    import(
      /* webpackChunkName: "compiled-lang.[request]" */
      `.compiled-lang/${locale}`
    )
);

export default function useMessages({
  locale,
  defaultLocale,
}: {
  locale: string;
  defaultLocale: string;
}) {
  const [, defaultMessages] = useLocaleMessagesSafe(defaultLocale);
  const [, messages] = useLocaleMessagesSafe(locale);

  return {
    ...defaultMessages,
    ...messages,
  };
}
