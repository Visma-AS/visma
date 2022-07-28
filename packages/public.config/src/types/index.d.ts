import Keycloak from 'keycloak-js';

declare global {
  var ENV: {
    BACKEND?: {
      baseURL?: string;
    };
    KEYCLOAK: Parameters<typeof Keycloak>[0];
    KEYCLOAK_MOCK_USER?: MockUser;
    LOCALES?: string[];
  } | void;
}
