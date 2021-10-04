import config from '@visma/public.config';
import definition from 'api/schema.json';

const baseURL = config.backend?.baseURL;

if (baseURL) {
  const isAbsoluteURL =
    baseURL.indexOf('://') > 0 || baseURL.indexOf('//') === 0;

  definition.servers[0].url = isAbsoluteURL
    ? baseURL
    : globalThis.location.origin + baseURL;
}
