# @visma/vite-plugin-super-template

[Vite](https://vitejs.dev/) plugin for super-template.

## Usage

`vite.config.js`:

```js
import superTemplate from '@visma/vite-plugin-super-template';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [superTemplate()],
});
```

### Options

Default options can be tweaked or replaced entirely.

#### Replace `@visma/babel-preset-formatjs` with `babel-plugin-formatjs`

```js
import superTemplate, {
  defaultOptions,
} from '@visma/vite-plugin-super-template';
import { defineConfig } from 'vite';

const withOriginalFormatJSBabelPlugin = (options) => {
  const { plugins, presets } = options.react.babel;

  const indexOfVismaFormatJSPreset = presets.findIndex(
    (preset) => preset === '@visma/formatjs'
  );

  presets.splice(indexOfVismaFormatJSPreset, 1);
  plugins.push('formatjs');

  return options;
};

export default defineConfig({
  plugins: [superTemplate(withOriginalFormatJSBabelPlugin(defaultOptions))],
});
```
