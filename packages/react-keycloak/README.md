# @visma/react-keycloak

Keycloak helper components, hooks, etc.

## Helper components and hooks

### `useCurrentUser`

```js
import { useCurrentUser } from '@visma/react-keycloak';

const user = useCurrentUser();
```

### `HasRole`

`fallback` and `children` props are optional.

```js
import { HasRole } from '@visma/react-keycloak';

<HasRole realm="admin" fallback={<Unauthorized />}>
  <AdminPanel />
</HasRole>;
```

```js
<HasRole realm={['foo', 'bar']}>...</HasRole>
```

```js
<HasRole resource={{ 'my-app': 'editor' }} /* fallback={<Unauthorized />} */>
  <EditButton />
</HasRole>
```

Shorthand to check for realm and current `clientId` resource roles:

```js
<HasRole admin>
  <AdminPanel />
</HasRole>
```

### `IsAuthenticated`

`fallback` and `children` props are optional.

```js
import { IsAuthenticated } from '@visma/react-keycloak';

<IsAuthenticated fallback={<Public />}>
  <Private />
</IsAuthenticated>;
```

### `useHasRole`

```js
import { useHasRole } from '@visma/react-keycloak';

const isAdmin = useHasRole({ realm: 'admin' });
```

```js
const isFooOrBar = useHasRole({ realm: ['foo', 'bar'] });
```

```js
const useIsAdmin = () => useHasRole({ realm: 'admin' });
```

```js
const isEditor = useHasRole({ resource: { 'my-app': 'editor' } });
```

```js
const useIsEditor = () => useHasRole({ resource: { 'my-app': 'editor' } });
```

Shorthand to check for realm and current `clientId` resource roles:

```js
const isAdmin = useHasRole('admin');
const isFooOrBar = useHasRole(['foo', 'bar']);
```

### `useIsAuthenticated`

```js
import { useIsAuthenticated } from '@visma/react-keycloak';

const isAuthenticated = useIsAuthenticated();
```

## `ReactKeycloakProvider`

[`ReactKeycloakProvider`](https://www.npmjs.com/package/@react-keycloak/web) with all of the extensions below integrated.

### `withPageRefreshSupport`

Stores `token` and `refreshToken` in `localStorage`. Authentication is shared live between browser tabs.

```js
import { withPageRefreshSupport } from '@visma/react-keycloak';
import { ReactKeycloakProvider as Provider } from '@react-keycloak/web';

const ReactKeycloakProvider = withPageRefreshSupport(Provider);
```

On logout, use `useKeycloak` from `@visma/react-keycloak`, to sync logout with other tabs:

```js
import { useKeycloak } from '@visma/react-keycloak';

const { keycloak } = useKeycloak();

<button
  onClick={() => {
    keycloak.logout();
  }}
>
  Log out
</button>;
```

### `withAxiosAuthorizationHeaderUpdater`

Updates `Authorization: Bearer <token>` in given axios instance.

```js
import { withAxiosAuthorizationHeaderUpdater } from '@visma/react-keycloak';
import { ReactKeycloakProvider as Provider } from '@react-keycloak/web';
import axios from 'axios';

const ReactKeycloakProvider = withAxiosAuthorizationHeaderUpdater(Provider);

<ReactKeycloakProvider
  axios={
    axios /* AxiosStatic | Promise<AxiosStatic>, default: global axios instance */
  }
  /* … */
>
  ...
</ReactKeycloakProvider>;
```

### `withMockProvider`

If `REACT_APP_KEYCLOAK_MOCK_USER` environment variable is set, mock implementation of `ReactKeycloakProvider` is used.

Example:

```sh
REACT_APP_KEYCLOAK_MOCK_USER={"name":"John Doe","email":"john.doe@example.com","realm_access":{"roles":[]},"resource_access":{"super-template":{"roles":["admin"]}}}
```
