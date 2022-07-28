declare module '@/api' {
  export const clientPromise: Promise<import('axios').AxiosStatic>;
}

declare module '@/api/schema.json' {
  const _default: import('openapi-types').OpenAPIV3.Document;
  export default _default;
}
