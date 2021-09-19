# @visma/formatjs-scripts

## Usage

`.gitignore`

```sh
# translations
# Messages for the default language are in the source code. Update the code instead of this file.
/lang/fi-FI.json
/.compiled-lang
```

`package.json`

```
"prestart": "npm run messages",
"prebuild": "npm run messages",
"messages": "formatjs-scripts",
```
