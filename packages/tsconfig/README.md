# @visma/tsconfig

Shared base TSConfigs.

## Usage

`tsconfig.json`

```json
{
  "extends": "@visma/tsconfig/tsconfig.json",
  "compilerOptions": {
    "outDir": "lib",
    "rootDir": "src"
  },
  "include": ["src/"]
}
```

### TS Patch

With `@visma/tsconfig/react-library.json` you must also use [TS Patch](https://www.npmjs.com/package/ts-patch).
