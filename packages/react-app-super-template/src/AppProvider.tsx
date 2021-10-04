import { IntlProvider } from '@visma/react-intl-bundled-messages';
import { ReactKeycloakProvider } from '@visma/react-keycloak';
import { clientPromise } from 'api';
import React, { Suspense } from 'react';
import keycloak from './keycloak.js';
import './setBackendBaseURL.js';

export default function AppProvider({ children = null, fallback = null }) {
  return (
    <Suspense fallback={fallback}>
      <ReactKeycloakProvider
        axios={clientPromise}
        authClient={keycloak}
        LoadingComponent={fallback ?? undefined}
      >
        <Suspense fallback={fallback}>
          <IntlProvider>{children}</IntlProvider>
        </Suspense>
      </ReactKeycloakProvider>
    </Suspense>
  );
}
