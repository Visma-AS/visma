# @visma/react-intl-bundled-messages

[`IntlProvider`](https://formatjs.io/docs/react-intl/components/) that lazy loads messages in [current language](https://github.com/Visma-AS/visma/tree/main/packages/react-app-locale-utils) in Webpack environment.

## Usage

1. Add Webpack resolve alias from `.compiled-lang` to `src/.compiled-lang`
2. Build messages using [@visma/formatjs-scripts](https://github.com/Visma-AS/visma/tree/main/packages/formatjs-scripts)
3. Add `IntlProvider`:

   ```js
   import { IntlProvider } from '@visma/react-intl-bundled-messages';

   function App() {
     return <IntlProvider>...</IntlProvider>;
   }
   ```
