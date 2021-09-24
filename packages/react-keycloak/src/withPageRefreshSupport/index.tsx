import useLocalStorageJson from '@postinumero/storage/lib/useLocalStorageJson.js';
import jwt_decode from 'jwt-decode';
import React, { ReactNode, useEffect, useState } from 'react';
import type { Props, Provider } from '../index.js';
import withLocalStorageKeyContext, {
  useLocalStorageKey,
} from './withLocalStorageKeyContext.js';

export const initOptions = {
  checkLoginIframe: false,
  pkceMethod: 'S256',
  onLoad: null,
};

export default function withPageRefreshSupport(Provider: Provider) {
  return withLocalStorageKeyContext(function ReactKeycloakProvider(
    props: Props
  ): Provider {
    const { authClient, onTokens, ...other } = props;
    const [initialized, setInitialized] = useState(false);
    const [storedTokens, setStoredTokens] = useLocalStorageJson(
      useLocalStorageKey()
    );

    const sub =
      storedTokens?.token &&
      jwt_decode<{ sub: string }>(storedTokens.token).sub;

    // To avoid infinite login cycle, especially when multiple tabs are open,
    // don't use stored tokens directly.
    const [tokens, setTokens] = useState(storedTokens);

    useEffect(() => {
      if (initialized) {
        setTokens(sub ? storedTokens : null);
      }
      // We want to update the tokens only if initialized and when the subject
      // changes.
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sub]);

    return (
      <Provider
        authClient={authClient}
        initOptions={{
          ...initOptions,
          ...tokens,
          ...props.initOptions,
        }}
        onTokens={async (tokens) => {
          const { refreshToken, token } = tokens;

          setStoredTokens({ token, refreshToken });

          await onTokens?.(tokens);
          setInitialized(true);
        }}
        {...other}
      >
        {initialized && (other as { children: ReactNode }).children}
      </Provider>
    ) as unknown as Provider;
  } as unknown as Provider);
}
