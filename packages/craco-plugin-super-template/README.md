# @visma/craco-plugin-super-template

## Usage

`craco.config.js`:

```js
module.exports = async ({ env }) => {
  return {
    plugins: [(await import('@visma/craco-plugin-super-template')).default],
  };
};
```
