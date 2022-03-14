# @visma/tailwindcss-vud

[![npm version](https://badge.fury.io/js/%40visma%2Ftailwindcss-vud.svg)](https://www.npmjs.com/package/@visma/tailwindcss-vud)

[Visma Unified Design (VUD)](https://ux.visma.com/guidelines-resources/) theme configuration for [tailwindcss](https://tailwindcss.com).

## Usage

> Note: This guide expects to have `tailwindcss` already in place.
> If not, please refer to [tailwindcss installation](https://tailwindcss.com/docs/installation) guide.

This package supports two different configurations:

- **Complementary** - adapted for use together with [`@vismaux/vud`](https://www.npmjs.com/package/@vismaux/vud);
- **Vanilla** - standalone configuration of the VUD theme.

### Complementary (to `@vismaux/vud`)

1. Install this package `npm i @visma/tailwindcss-vud -D`;
2. Add it to your `tailwind.config.js`:

```js
const { complementaryTheme } = require('@visma/tailwindcss-vud');

module.exports = {
  /**
   * Main property to set the theme.
   * If needed, values can be overwritten by using the spread syntax:
   * `theme: { ...complementaryTheme, colors: myColors }`
   * or taking use of special `extend` property, more on that:
   * https://tailwindcss.com/docs/theme#extending-the-default-theme
   */
  theme: complementaryTheme,

  // recommended, to avoid name conflicts with the classes coming from `vud` library
  prefix: 'tw-',

  // recommended, to give higher specificity for tailwind utilities than `vud` styles
  important: true,

  // recommended, because `vud` library already handles the font family
  corePlugins: {
    fontFamily: false,
  },

  // ... the rest of your configuration ...
};
```

### Vanilla

to be implemented...
