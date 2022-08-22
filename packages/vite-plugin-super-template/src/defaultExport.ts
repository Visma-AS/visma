export default function defaultExport<T>(module: T) {
  const cjsModule: { default: T } = module as any;
  return typeof cjsModule?.default === 'undefined' ? module : cjsModule.default;
}
