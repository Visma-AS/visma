import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';
import NodeModulesPolyfillPlugin from '@esbuild-plugins/node-modules-polyfill';
import rollupNodePolyFill from 'rollup-plugin-node-polyfills';
import { Plugin } from 'vite';
import defaultExport from './defaultExport.js';

const craLikePlugin: Plugin = {
  name: '@visma/vite-plugin-super-template-cra-like',
  config: (_config, { mode }) => ({
    server: {
      port: 3000,
    },
    define: {
      'process.env': {},
      'process.platform': 'undefined',
      'process.browser': 'true',
      global: 'globalThis',
    },
    optimizeDeps: {
      // For openapi-client-axios
      esbuildOptions: {
        plugins: [
          defaultExport(NodeGlobalsPolyfillPlugin)({
            process: true,
            buffer: true,
          }) as any, // any, because it was not possible to fully dedupe esbuild dependency,
          mode === 'production' && defaultExport(NodeModulesPolyfillPlugin)(),
        ].filter(Boolean),
      },
    },
    build: {
      rollupOptions: {
        plugins: [defaultExport(rollupNodePolyFill)()],
      } as any,
    },
  }),
};

export default craLikePlugin;
