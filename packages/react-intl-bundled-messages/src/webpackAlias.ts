import { resolve } from 'node:path';
import target from './target.js';

export default (env: any) => ({
  // Enable imports from `.compiled-lang/fi-FI.json` etc.
  [target]: resolve(`./${target}`),

  // https://formatjs.io/docs/guides/advanced-usage/#react-intl-without-parser-40-smaller
  ...(env === 'production' && {
    '@formatjs/icu-messageformat-parser':
      '@formatjs/icu-messageformat-parser/no-parser',
  }),
});
