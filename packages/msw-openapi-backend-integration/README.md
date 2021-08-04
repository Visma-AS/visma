# @visma/msw-openapi-backend-integration

Helper to integrate Mock Service Worker with OpenAPI Backend.

[TodoMVC example](https://github.com/Visma-AS/visma/tree/main/packages/react-openapi-client-generator/examples/todoapp)

## Setup in Create React App

1. Install: `npm i @visma/msw-openapi-backend-integration`
2. Follow [Mock Service Worker instructions](https://mswjs.io/docs/getting-started/install). In place of `handlers.js`, in `src/mocks/browser.js` use:

```js
import { setupWorker } from 'msw';
import { handlers } from '@visma/msw-openapi-backend-integration';
import definition from '../petstore.json';

export const worker = setupWorker(...handlers({ definition }));
```

For dynamic responses and mutations, see `requestLogicHandlers` in [TodoMVC example source](https://github.com/Visma-AS/visma/tree/main/packages/react-openapi-client-generator/examples/todoapp/src/mocks/requestLogicHandlers.ts).
