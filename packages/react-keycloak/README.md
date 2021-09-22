# @visma/react-keycloak

## Helper components and hooks

### `useCurrentUser`

```js
import { useCurrentUser } from '@visma/react-keycloak';

const user = useCurrentUser();
```

### `HasRole`

```js
import { HasRole } from '@visma/react-keycloak';

<HasRole realm="admin" fallback={<Unauthorized />}>
  <AdminPanel />
</HasRole>;
```

### `IsAuthenticated`

```js
import { IsAuthenticated } from '@visma/react-keycloak';

<IsAuthenticated fallback={<Public />}>
  <Private />
</IsAuthenticated>;
```

```js
<HasRole resource={{ 'my-app': 'editor' }} /* fallback={<Unauthorized />} */>
  <EditButton />
</HasRole>
```

### `useHasRole`

```js
import { useHasRole } from '@visma/react-keycloak';

const isAdmin = useHasRole({ realm: 'admin' });
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
  authClient={keycloak}
  axios={axios /* AxiosStatic | Promise<AxiosStatic> */}
>
  ...
</ReactKeycloakProvider>;
```
