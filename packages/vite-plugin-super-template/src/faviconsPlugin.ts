import { config } from 'favicons';
import fs from 'fs-extra';
import vitePluginFaviconsInject from 'vite-plugin-favicons-inject';

interface Options {
  source?: string;
  config?: typeof config.defaults;
}

export const defaultOptions = {
  source: 'src/images/icon.png',
  config: {
    icons: {
      android: false,
      appleIcon: false,
      appleStartup: false,
      favicons: true,
      windows: false,
      yandex: false,
    },
  },
};

const faviconsPlugin = (options?: Options) => {
  return options?.source || fs.pathExistsSync(defaultOptions.source)
    ? vitePluginFaviconsInject(
        options?.source ?? defaultOptions.source,
        options?.config ?? defaultOptions.config
      )
    : [];
};

export default faviconsPlugin;
