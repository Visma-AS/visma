# @visma/react-openapi-client-generator

Generate typed hooks and methods for React app from OpenAPI schema.

[TodoMVC example](https://visma-as.github.io/visma/react-openapi-client-generator/examples/todoapp/)

## Setup in Create React App

1. Install: `npm i @visma/react-openapi-client-generator`
2. Add API schema JSON, e.g. `src/petstore.json` ([examples](https://github.com/OAI/OpenAPI-Specification/blob/main/examples))
3. Add scripts to `package.json`:

JavaScript:

```
"generate-client": "react-openapi-client-generator src/petstore.json src/client.js",
"prestart": "npm run generate-client",
"prebuild": "npm run generate-client",
```

TypeScript:

```
"generate-client": "react-openapi-client-generator src/petstore.json src/client.js",
"prestart": "npm run generate-client",
"prebuild": "npm run generate-client",
```

4. Use `<Suspense>` to show a loading indicator(s)
5. Use Error Boundary to handle errors

## Hooks for data fetching

Each `GET` operation is available as a hook. Hooks return the response data directly. **This is the main approach to fetch data for rendering**. Requests are memoized, so it is fine to call the hooks in any component, right where the data is needed.

```js
import { useItems } from './client';

function List() {
  const items = useItems();
  // ...
}
```

## Mutations and updates

After updating the the data in the backend, the UI must be notified to refetch certain paths. For this there are `refetch*` methods for each `GET` operation (hook). Calling refetch does nothing if there are no components currently mounted using the corresponding hooks. This means it is safe to call `refetch*` just in case, whenever the data has been mutated. It is also recommended to put these "mutation / what needs to be refetch" rules to a separate file, for example `api.js`:

```js
import * as client from './client';

export * from './client';

export async function postItem(item) {
  await client.postItem(null, item);
  // Trigger reteching GET /items and rerendering components using
  // `useItems()`.
  // Does nothing, if there are no components mounted using `useItems()`.
  await client.refetchItems();
}
// ...
```

## Parameters

See `openapi-client-axios` documentation for [Parameters](https://www.npmjs.com/package/openapi-client-axios#parameters).

## FAQ

### How to call hooks conditionally?

You don't. Instead create a new component and render components conditionally. For example create `<Search>` component for `<input>` and `query` state. Render `<SearchResults>` only when the `query` is available. The hook can be called unconditionally in `<SearchResults query={query} />`.

### What if the request fails?

You may use [react-error-boundary](https://github.com/bvaughn/react-error-boundary) for general error handling. If you make request to an endpoint that may intentionally fail and you need to handle the error in the same component, each hook has a `*Safe` version for that. For example a search response may have status code 404 and we don't want to use the general error boundary for that:

```js
import { useSearchSafe } from './client';

function SearchResults({ query }) {
  const [
    error, // null | axios error
    data, // undefined | axios response.data
  ] = useSearchSafe({ query });

  if (error) {
    // ...
  }
  // ...
}
```

### How to access response headers?

There are `*Raw` versions of the hooks and API methods for accessing the complete axios response:

```js
import { useFooRaw, postFooRaw } from './client';

function App() {
  const { headers, data } = useFooRaw();

  async function handleSubmit(data) {
    const { headers, data } = await postFooRaw(null, data);
  }
  // ...
}
```
