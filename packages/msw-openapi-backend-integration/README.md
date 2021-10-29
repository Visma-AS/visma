# @visma/msw-openapi-backend-integration

Helper to integrate [Mock Service Worker](https://mswjs.io/) with [OpenAPI Backend](https://github.com/anttiviljami/openapi-backend).

[TodoMVC example](https://visma-as.github.io/visma/react-openapi-client-generator/examples/todoapp/)

## Setup in Create React App

1. Install: `npm i @visma/msw-openapi-backend-integration`
2. Follow [Mock Service Worker instructions](https://mswjs.io/docs/getting-started/install). In place of `handlers.js`, in `src/mocks/browser.js` use:

```js
import { setupWorker } from 'msw';
import { handlers } from '@visma/msw-openapi-backend-integration';
import definition from '../petstore.json';

export const worker = setupWorker(...handlers({ definition }));
```

For dynamic responses and mutations, see `requestLogicHandlers` in [TodoMVC example source](/packages/react-openapi-client-generator/examples/todoapp/src/mocks/requestLogicHandlers.ts).
