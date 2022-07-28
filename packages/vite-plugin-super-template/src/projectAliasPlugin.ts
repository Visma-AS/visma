import * as path from 'node:path';
import { Plugin } from 'vite';

const projectAliasPlugin: Plugin = {
  name: '@visma/vite-plugin-super-template-project-alias',
  config: (config) => ({
    resolve: {
      alias: {
        '@': path.resolve(config.root ?? '', 'src'),
      },
    },
  }),
};

export default projectAliasPlugin;
