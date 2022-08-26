# @visma/public.config

Public build, deploy & runtime configs in `globalThis.ENV`, dynamic by hostname.

## Example

```js
// import once, before accessing the values
import '@visma/public.config';

// ...

console.log(globalThis.ENV.HELLO);
```

## Build time config

`.env`:

```
# (Depending on the tool use VITE_ or REACT_APP_ prefix)
VITE_HELLO=world
REACT_APP_HELLO=world
```

## Deploy time & runtime configs

Write values in `window.ENV` in a `<script>` tag before the any other script tags. These values will override any build time values set in `.env`. Example:

```js
html.replace(
  '<!-- overrides placeholder -->',
  `<script>
window.ENV = ${JSON.stringify(data)};
</script>`
);
```

The browser should receive something like from the server:

```html
...
<body>
  <div id="root"></div>
  <script>
    window.ENV = {
      HELLO: 'world',
    };
  </script>
  <script type="module" src="/src/main.tsx"></script>
</body>
...
```

Alternatively, load config at runtime before importing other modules:

```js
import loadRuntimeConfig from '@visma/public.config/lib/loadRuntimeConfig.js';

const url = process.env.PUBLIC_URL + '/path/to/config.json';

await loadRuntimeConfig(url);

const App = (await import(/* webpackMode: "eager" */ './App')).default;
```

> ℹ To use dynamic paths, `location` object values are available in the `url` when wrapped in `${}`. Example:
>
> ```js
> const url = process.env.PUBLIC_URL + '/config/${hostname}.json';
> ```

## JSON values

Valid JSON values are parsed. Escape value using `'"something"'` to avoid incorrect type conversion. Example:

```
VITE_BOOLEAN=true
VITE_BOOLEAN_STRING='"true"'
VITE_NUMBER=123
VITE_NUMBER_STRING='"123"'
VITE_OBJ={"hello":"world"}
VITE_STRING=foo
```

`globalThis.ENV`:

```json
{
  "BOOLEAN": true,
  "BOOLEAN_STRING": "true",
  "NUMBER": 123,
  "NUMBER_STRING": "123",
  "OBJ": { "hello": "world" },
  "STRING": "foo"
}
```

## Dynamic config by hostname

A special `HOSTNAME_OVERRIDES` variable can be used to override values at runtime. If the current hostname matches or is a subdomain of the one in the config, the config is merged. Later config is merged to an earlier. Without the `hostname` the config is always merged.

```json
VITE_HOSTNAME_OVERRIDES=[
  {
    "BACKEND": { "baseURL": "http://localhost:8080" }
  },
  [
    "example.com",
    {
      "BACKEND": { "baseURL": "https://api.example.com" }
    }
  ],
  [
    "test.example.com",
    {
      "BACKEND": { "baseURL": "https://api.test.example.com" }
    }
  ]
]
```

| Hostname             | `globalThis.ENV.BACKEND.baseURL` |
| -------------------- | -------------------------------- |
| `"example.com"`      | `"https://api.example.com"`      |
| `"test.example.com"` | `"https://api.test.example.com"` |
| other                | `"http://localhost:8080"`        |
