import { create } from '@postinumero/use-async';

const [usePromise] = create((value: Promise<any>) => value);

export default function Resolve<T extends (...args: any) => any>({
  children,
  value,
}: {
  children: (resolved: AsyncReturnType<T>) => JSX.Element;
  value: Promise<T>;
}) {
  return children(usePromise(value) as AsyncReturnType<T>);
}

// https://www.jpwilliams.dev/how-to-unpack-the-return-type-of-a-promise-in-typescript
type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;
