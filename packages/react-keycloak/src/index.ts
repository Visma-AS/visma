import type { AuthProviderProps } from '@react-keycloak/core';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import type { KeycloakInstance } from 'keycloak-js';

export { default as HasRole } from './helpers/HasRole.js';
export { default as IsAuthenticated } from './helpers/IsAuthenticated.js';
export { default as useCurrentUser } from './helpers/useCurrentUser.js';
export { default as useHasRole } from './helpers/useHasRole.js';
export { default as useIsAuthenticated } from './helpers/useIsAuthenticated.js';
export { default as ReactKeycloakProvider } from './ReactKeycloakProvider.js';
export { default as useKeycloak } from './useKeycloak.js';
export { default as withAxiosAuthorizationHeaderUpdater } from './withAxiosAuthorizationHeaderUpdater.js';
export { default as withPageRefreshSupport } from './withPageRefreshSupport/index.js';

export type Provider = typeof ReactKeycloakProvider;
export type Props = AuthProviderProps<KeycloakInstance>;
