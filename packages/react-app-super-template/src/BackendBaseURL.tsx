import type { AxiosStatic } from 'axios';
import { useMemo } from 'react';
import config from './publicConfig.js';

export default function BackendBaseURL({
  axios,
  children,
}: {
  axios: AxiosStatic;
  children: JSX.Element;
}): JSX.Element {
  useMemo(() => {
    if (config.backend?.baseURL) {
      axios.defaults.baseURL = config.backend.baseURL;
    }
  }, []);

  return children;
}
