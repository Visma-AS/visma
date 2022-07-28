import type { OpenAPIV3 } from 'openapi-types';
import { useEffect } from 'react';

const useSetBackendBaseURL = (
  apiSchema: OpenAPIV3.Document,
  baseURL?: string
) =>
  useEffect(() => {
    if (baseURL) {
      const isAbsoluteURL =
        baseURL.indexOf('://') > 0 || baseURL.indexOf('//') === 0;

      apiSchema.servers![0]!.url = isAbsoluteURL
        ? baseURL
        : globalThis.location.origin + baseURL;
    }
  }, []);

export default useSetBackendBaseURL;
