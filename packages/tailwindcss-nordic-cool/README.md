# @visma/tailwindcss-nordic-cool

[![npm version](https://badge.fury.io/js/%40visma%2Ftailwindcss-nordic-cool.svg)](https://www.npmjs.com/package/@visma/tailwindcss-nordic-cool)

[Nordic cool](https://ux.visma.com/weblibrary/latest/) theme configuration for [tailwindcss](https://tailwindcss.com).

## ⚠️ Deprecation notice ⚠️

This package is deprecated in favor of [@visma/tailwindcss-vud](/packages/tailwindcss-vud).

## Usage

> Note: This guide expects to have `tailwindcss` already in place.
> If not, please refer to [tailwindcss installation](https://tailwindcss.com/docs/installation) guide.

This package supports two different configurations:

- **Complementary** - adapted for use together with [`@vismaux/nordic-cool`](https://www.npmjs.com/package/@vismaux/nordic-cool);
- **Vanilla** - standalone configuration of the nordic-cool theme.

### Complementary (to `@vismaux/nordic-cool`)

1. Install this package `npm i @visma/tailwindcss-nordic-cool -D`;
2. Add it to your `tailwind.config.js`:

```js
const { complementaryTheme } = require('@visma/tailwindcss-nordic-cool');

module.exports = {
  /**
   * Main property to set the theme.
   * If needed, values can be overwritten by using the spread syntax:
   * `theme: { ...complementaryTheme, colors: myColors }`
   * or taking use of special `extend` property, more on that:
   * https://tailwindcss.com/docs/theme#extending-the-default-theme
   */
  theme: complementaryTheme,

  // recommended, to avoid name conflicts with the classes coming from `nordic-cool` library
  prefix: 'tw-',

  // recommended, to give higher specificity for tailwind utilities than `nordic-cool` styles
  important: true,

  // recommended, because `nordic-cool` library already handles the font family
  corePlugins: {
    fontFamily: false,
  },

  // ... the rest of your configuration ...
};
```

### Vanilla

to be implemented...
