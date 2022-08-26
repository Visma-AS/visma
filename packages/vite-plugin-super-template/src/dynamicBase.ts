import '@visma/public.config/config';
import { Plugin } from 'vite';
import { dynamicBase as vitePluginDynamicBase } from 'vite-plugin-dynamic-base';

const dynamicBase: Plugin[] = [
  {
    name: '@visma/vite-plugin-dynamic-base',
    config: () => ({
      base: process.env.NODE_ENV === 'production' ? '/__dynamic_base__/' : '/',
    }),
  },
  vitePluginDynamicBase({
    publicPath: '((window.ENV && window.ENV.BASENAME) || "")',
    transformIndexHtml: true,
  }),
];

export default dynamicBase;
