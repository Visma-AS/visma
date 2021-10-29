# @visma/craco-plugin-super-template

[CRACO](https://github.com/gsoft-inc/craco) plugin for [@visma/cra-template-craco-super-template](/packages/cra-template-craco-super-template).

## Usage

`craco.config.js`:

```js
module.exports = async ({ env }) => {
  return {
    plugins: [(await import('@visma/craco-plugin-super-template')).default],
  };
};
```
