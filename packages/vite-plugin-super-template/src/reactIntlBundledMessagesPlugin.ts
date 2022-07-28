import webpackAlias from '@visma/react-intl-bundled-messages/lib/webpackAlias.js';
import { Plugin } from 'vite';

const reactIntlBundledMessagesPlugin: Plugin = {
  name: '@visma/vite-plugin-super-template-react-intl-bundled-messages',
  config: (_config, { mode }) => ({
    resolve: {
      alias: {
        ...webpackAlias(mode),
      },
    },
  }),
};

export default reactIntlBundledMessagesPlugin;
