import { IntlProvider } from '@visma/react-intl-bundled-messages';
import { ReactKeycloakProvider } from '@visma/react-keycloak';
import { clientPromise } from 'api';
import React, { Suspense } from 'react';
import BackendBaseURL from './BackendBaseURL.js';
import keycloak from './keycloak.js';
import Resolve from './Resolve.js';

export default function AppProvider({ children = null, fallback = null }) {
  return (
    <Suspense fallback={fallback}>
      <Resolve value={clientPromise}>
        {(axios) => (
          <BackendBaseURL axios={axios}>
            <ReactKeycloakProvider
              axios={axios}
              authClient={keycloak}
              LoadingComponent={fallback ?? undefined}
            >
              <Suspense fallback={fallback}>
                <IntlProvider>{children}</IntlProvider>
              </Suspense>
            </ReactKeycloakProvider>
          </BackendBaseURL>
        )}
      </Resolve>
    </Suspense>
  );
}
