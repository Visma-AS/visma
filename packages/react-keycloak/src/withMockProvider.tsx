import { reactKeycloakWebContext } from '@react-keycloak/web/lib/context';
import { KeycloakInstance, KeycloakLogoutOptions } from 'keycloak-js';
import React, { useEffect, useReducer, useState } from 'react';
import type { Props, Provider } from './index.js';

const ContextProvider = reactKeycloakWebContext.Provider;

type MockUser = {
  realm_access: { roles: string[] };
  resource_access: { [resource: string]: { roles: string[] } };
};

export interface PropsWithChildren extends Props {
  mockUser: MockUser;
  children: JSX.Element;
}

export default process.env.REACT_APP_KEYCLOAK_MOCK_USER
  ? function withMockProvider(): Provider {
      const mockUser = JSON.parse(process.env.REACT_APP_KEYCLOAK_MOCK_USER!);

      function useAuthClientMock({
        user: { realm_access, resource_access, ...idTokenParsed },
        onTokens,
      }: {
        user: MockUser;
        onTokens: Props['onTokens'];
      }) {
        const [, forceUpdate] = useReducer((x) => x + 1, 0);
        const [authenticated, setAuthenticated] = useState(false);

        return {
          idTokenParsed: authenticated ? idTokenParsed : undefined,
          authenticated,
          login() {
            setAuthenticated(true);
            onTokens!({
              token:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
              refreshToken: '<refreshToken>',
            });
            forceUpdate();
          },
          logout(options: KeycloakLogoutOptions) {
            setAuthenticated(false);
            forceUpdate();
            if (options?.redirectUri) {
              globalThis.location.href = options.redirectUri;
            }
          },
          hasRealmRole(role: string) {
            return authenticated && realm_access?.roles?.includes(role);
          },
          hasResourceRole(role: string, resource: string) {
            return (
              authenticated &&
              resource_access?.[resource]?.roles?.includes(role)
            );
          },
        };
      }

      return function MockProvider({
        LoadingComponent,
        onTokens = () => {},
        children,
        initOptions: { token, refreshToken } = {},
      }: PropsWithChildren) {
        const [initialized, setInitialized] = useState(false);
        const authClient = useAuthClientMock({
          user: mockUser,
          onTokens,
        }) as KeycloakInstance;
        useEffect(() => {
          setTimeout(() => {
            onTokens({ token, refreshToken });
            if (token && refreshToken) {
              authClient.login();
            }
            setInitialized(true);
          }, 200);
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        return initialized || !LoadingComponent ? (
          <ContextProvider value={{ authClient, initialized }}>
            {children}
          </ContextProvider>
        ) : (
          LoadingComponent
        );
      } as unknown as Provider;
    }
  : (Provider: Provider) => Provider;
