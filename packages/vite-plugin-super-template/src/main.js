import react from '@vitejs/plugin-react';
import dynamicImport from 'vite-plugin-dynamic-import';
import envCompatible from 'vite-plugin-env-compatible';
import webpackAlias from '@visma/react-intl-bundled-messages/webpackAlias';

const reactIntlBundledMessagesAliasPlugin = () => ({
  name: '@visma/vite-plugin-react-intl-bundled-messages',
  config: async (_confic, { mode }) => ({
    resolve: {
      alias: {
        ...webpackAlias(mode),
      },
    },
  }),
});

export default function superTemplate(config) {
  return [
    react(
      config?.react ?? {
        babel: {
          presets: ['@visma/formatjs'],
          plugins: ['codegen'],
        },
      }
    ),
    dynamicImport(config?.dynamic),
    envCompatible(
      config?.envCompatible ?? {
        prefix: 'REACT_APP',
      }
    ),
    reactIntlBundledMessagesAliasPlugin(),
  ];
}
