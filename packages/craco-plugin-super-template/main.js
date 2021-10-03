import { deepMergeWithArray } from '@craco/craco/lib/utils.js';
import publicConfigWebpackAlias from '@visma/public.config/lib/webpackAlias.js';
import bundledMessagesWebpackAlias from '@visma/react-intl-bundled-messages/lib/webpackAlias.js';

const plugin = {
  plugin: {
    overrideCracoConfig: ({ cracoConfig, context: { env } }) =>
      deepMergeWithArray(cracoConfig, {
        webpack: {
          alias: {
            ...bundledMessagesWebpackAlias(env),
            ...publicConfigWebpackAlias,
          },
        },
        babel: {
          presets: ['@visma/formatjs'],
          plugins: ['codegen'],
        },
      }),
  },
};

export default plugin;
