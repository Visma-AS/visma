import { Plugin } from 'vite';

// Opt out from optimizing import from `@/api`. Development build incorrectly
// gives different references when importing clientPromise.

const optimizeOpenAPIPatchPlugin: Plugin = {
  name: '@visma/vite-plugin-super-template-optimize-openapi-patch',
  config: (_config) => ({
    optimizeDeps: {
      exclude: ['@/api'],
    },
  }),
};

export default optimizeOpenAPIPatchPlugin;
