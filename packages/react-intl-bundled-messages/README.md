# @visma/react-intl-bundled-messages

[`IntlProvider`](https://formatjs.io/docs/react-intl/components/) that lazy loads messages in [current language](https://github.com/Visma-AS/visma/tree/main/packages/react-app-locale-utils) in Webpack environment.

## Usage

1. Add module resolve alias. In Webpack config:

   ```js
   import bundledMessagesWebpackAlias from '@visma/react-intl-bundled-messages/lib/webpackAlias.js';

   export default {
     //...
     resolve: {
       alias: {
         ...bundledMessagesWebpackAlias(mode),
       },
     },
   };
   ```

2. Build messages using [@visma/formatjs-scripts](https://github.com/Visma-AS/visma/tree/main/packages/formatjs-scripts)
3. Add `IntlProvider`:

   ```js
   import { IntlProvider } from '@visma/react-intl-bundled-messages';

   function App() {
     return <IntlProvider>...</IntlProvider>;
   }
   ```
