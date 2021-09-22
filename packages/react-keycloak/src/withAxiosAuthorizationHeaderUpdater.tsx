import type { AxiosStatic } from 'axios';
import React, { ReactNode, useState } from 'react';
import type { Props, Provider } from './index.js';

interface PropsWithAxios extends Props {
  axios: AxiosStatic | Promise<AxiosStatic>;
}

export default function withAxiosAuthorizationHeaderUpdater(
  Provider: Provider
) {
  return function ReactKeycloakProvider(props: PropsWithAxios) {
    const { authClient, onTokens, axios: axiosPromise, ...other } = props;
    const [initialized, setInitialized] = useState(false);

    return (
      <Provider
        authClient={authClient}
        onTokens={async (tokens) => {
          const axios = await axiosPromise;
          const { token } = tokens;

          if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
          } else {
            delete axios.defaults.headers.common.Authorization;
          }

          await onTokens?.(tokens);
          setInitialized(true);
        }}
        {...other}
      >
        {initialized && (other as { children: ReactNode }).children}
      </Provider>
    );
  } as unknown as typeof Provider;
}
