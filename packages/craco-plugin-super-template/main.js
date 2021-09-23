import { deepMergeWithArray } from '@craco/craco/lib/utils.js';
import { target } from '@visma/formatjs-scripts';
import path from 'path';

const plugin = {
  plugin: {
    overrideCracoConfig: ({ cracoConfig, context: { env } }) =>
      deepMergeWithArray(cracoConfig, {
        webpack: {
          alias: {
            // Enable imports from `.compiled-lang/fi-FI.json` etc.
            [target]: path.resolve(`./${target}`),
            // https://formatjs.io/docs/guides/advanced-usage/#react-intl-without-parser-40-smaller
            ...(env === 'production' && {
              '@formatjs/icu-messageformat-parser':
                '@formatjs/icu-messageformat-parser/no-parser',
            }),
          },
        },
        babel: {
          presets: ['@visma/formatjs'],
        },
      }),
  },
};

export default plugin;
