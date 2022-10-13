import dateFnsLocaleVitePlugin from '@visma/react-app-locale-utils/lib/dateFnsLocaleVitePlugin.js';
import reactIntlBundledMessagesPlugin, {
  defaultOptions as reactIntlBundledMessages,
} from '@visma/react-intl-bundled-messages/lib/vitePlugin.js';
import react from '@vitejs/plugin-react';
import dynamicImport from 'vite-plugin-dynamic-import';
import envCompatible from 'vite-plugin-env-compatible';
import tsconfigPaths from 'vite-tsconfig-paths';
import craLikePlugin from './craLikePlugin.js';
import defaultExport from './defaultExport.js';
import dynamicBase from './dynamicBase.js';
import faviconsPlugin, {
  defaultOptions as favicons,
} from './faviconsPlugin.js';
import gitInfoPlugin from './gitInfoPlugin.js';
import optimizeOpenAPIPatchPlugin from './optimizeOpenAPIPatchPlugin.js';
import projectAliasPlugin from './projectAliasPlugin.js';

export const defaultOptions = {
  envCompatible: {
    prefix: 'REACT_APP_',
  },
  favicons,
  react: {
    babel: {
      presets: ['@visma/formatjs'],
      plugins: ['codegen'],
    },
  },
  reactIntlBundledMessages,
};

interface Options {
  dynamicImport?: Parameters<typeof dynamicImport>[0];
  envCompatible?: Parameters<typeof envCompatible>[0];
  favicons?: Parameters<typeof faviconsPlugin>[0];
  react?: Parameters<typeof react>[0];
  reactIntlBundledMessages?: Parameters<
    typeof reactIntlBundledMessagesPlugin
  >[0];
}

export default function superTemplate(options?: Options) {
  return [
    craLikePlugin,
    dateFnsLocaleVitePlugin,
    defaultExport(dynamicImport)(options?.dynamicImport),
    dynamicBase,
    defaultExport(envCompatible)(
      options?.envCompatible ?? defaultOptions.envCompatible
    ),
    faviconsPlugin(options?.favicons),
    gitInfoPlugin,
    optimizeOpenAPIPatchPlugin,
    projectAliasPlugin,
    react(options?.react ?? defaultOptions.react),
    reactIntlBundledMessagesPlugin(options?.reactIntlBundledMessages),
    tsconfigPaths(),
  ];
}
