# @visma/public.config

## Example

```js
import config from '@visma/public.config';

axios.defaults.baseURL = config.backend.baseURL;
```

## Setup

1. Add module resolve alias. In Webpack config:

   ```js
   import publicConfigWebpackAlias from '@visma/public.config/lib/webpackAlias.js';

   export default {
     //...
     resolve: {
       alias: {
         ...publicConfigWebpackAlias,
       },
     },
   };
   ```

2. If using runtime config, also load the config before importing other modules. Example:

   ```js
   import loadRuntimeConfig from '@visma/public.config/lib/loadRuntimeConfig.js';

   const url = process.env.PUBLIC_URL + '/path/to/config.json';

   await loadRuntimeConfig(url);

   const App = (await import(/* webpackMode: "eager" */ 'components/App'))
     .default;
   ```

   > ℹ To use dynamic paths, `location` object values are available in the `url` when wrapped in `\${}`. Example:
   >
   > ```js
   > const url = process.env.PUBLIC_URL + '/config/\\${hostname}.json';
   > ```

## Build time config

At runtime, if the hostname matches or is a subdomain of the one in the config, the config is merged. Later config is merged to an earlier. Without the `hostname` the config is always merged.

`<root>/public.config.json`

```json
[
  {
    "backend": { "baseURL": "http://localhost:8080" }
  },
  [
    "example.com",
    {
      "backend": { "baseURL": "https://api.example.com" }
    }
  ],
  [
    "test.example.com",
    {
      "backend": { "baseURL": "https://api.test.example.com" }
    }
  ]
]
```

## Runtime config

`<public>/path/to/config.json`

```json
{
  "backend": { "baseURL": "https://api.example.com" }
}
```
