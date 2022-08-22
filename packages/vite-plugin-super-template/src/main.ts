import dateFnsLocaleVitePlugin from '@visma/react-app-locale-utils/lib/dateFnsLocaleVitePlugin.js';
import reactIntlBundledMessagesPlugin from '@visma/react-intl-bundled-messages/lib/vitePlugin.js';
import react from '@vitejs/plugin-react';
import dynamicImport from 'vite-plugin-dynamic-import';
import envCompatible from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
import craLikePlugin from './craLikePlugin.js';
import defaultExport from './defaultExport.js';
import gitInfoPlugin from './gitInfoPlugin.js';
import projectAliasPlugin from './projectAliasPlugin.js';

export const defaultOptions = {
  envCompatible: {
    prefix: 'REACT_APP_',
  },
  react: {
    babel: {
      presets: ['@visma/formatjs'],
      plugins: ['codegen'],
    },
  },
};

interface Options {
  dynamicImport?: Parameters<typeof dynamicImport>[0];
  envCompatible?: Parameters<typeof envCompatible>[0];
  react?: Parameters<typeof react>[0];
}

export default function superTemplate(options?: Options) {
  return [
    craLikePlugin,
    dateFnsLocaleVitePlugin,
    defaultExport(dynamicImport)(options?.dynamicImport),
    defaultExport(envCompatible)(
      options?.envCompatible ?? defaultOptions.envCompatible
    ),
    gitInfoPlugin,
    projectAliasPlugin,
    react(options?.react ?? defaultOptions.react),
    reactIntlBundledMessagesPlugin,
    tsconfigPaths(),
  ];
}
