import React, { createContext, useContext } from 'react';
import type { Props, Provider } from '../index.js';

export interface PropsWithLocalStorageKey extends Props {
  localStorageKey?: string;
  children: JSX.Element;
}

const Context = createContext<any>(undefined);

export const useLocalStorageKey = () => useContext(Context);

export default function withLocalStorageKeyContext(Provider: Provider) {
  return function ReactKeycloakProvider(props: PropsWithLocalStorageKey) {
    const { authClient, localStorageKey = 'keycloak_tokens', ...other } = props;

    return (
      <Context.Provider value={localStorageKey}>
        <Provider authClient={authClient} {...other} />
      </Context.Provider>
    );
  };
}
