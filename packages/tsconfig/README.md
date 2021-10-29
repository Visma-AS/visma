# @visma/tsconfig

TSConfig, mainly for this repository.

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
