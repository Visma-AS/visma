import Keycloak from 'keycloak-js';

declare global {
  var ENV: {
    BACKEND?: {
      baseURL?: string;
    };
    GIT_AUTHOR_DATE?: string;
    GIT_VERSION?: string;
    KEYCLOAK: Parameters<typeof Keycloak>[0];
    KEYCLOAK_MOCK_USER?: MockUser;
    LOCALES?: string[];
    PROD: boolean;
  } | void;
}
