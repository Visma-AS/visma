declare module '@visma/vite-plugin-date-fns-locale/dynamic-import-date-fns-locales' {
  interface T {
    [locale: string]: () => Promise<{ default: import('date-fns').Locale }>;
  }
  const dateFnsLocaleModules: T;
  export default dateFnsLocaleModules;
}
