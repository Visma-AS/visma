import react from '@vitejs/plugin-react';
import dynamicImport from 'vite-plugin-dynamic-import';
import envCompatible from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
import craLikePlugin from './craLikePlugin.js';
import projectAliasPlugin from './projectAliasPlugin.js';
import reactIntlBundledMessagesAliasPlugin from './reactIntlBundledMessagesPlugin.js';

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
    projectAliasPlugin,
    craLikePlugin,
    dynamicImport(options?.dynamicImport),
    envCompatible(options?.envCompatible ?? defaultOptions.envCompatible),
    react(options?.react ?? defaultOptions.react),
    reactIntlBundledMessagesAliasPlugin,
    tsconfigPaths(),
  ];
}
