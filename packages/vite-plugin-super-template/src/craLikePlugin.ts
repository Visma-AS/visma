import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill';
import { Plugin } from 'vite';

const craLikePlugin: Plugin = {
  name: '@visma/vite-plugin-super-template-cra-like',
  config: () => ({
    server: {
      port: 3000,
    },
    optimizeDeps: {
      // For openapi-client-axios
      esbuildOptions: {
        define: {
          global: 'globalThis',
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            buffer: true,
          }) as any, // any, because it was not possible to fully dedupe esbuild dependency
        ],
      },
    },
  }),
};

export default craLikePlugin;
