# @visma/formatjs-scripts

## Usage

1. [Set available locales](https://github.com/Visma-AS/visma/tree/main/packages/react-app-locale-utils#usage)
2. Add `.gitignore`:

   ```sh
   # translations
   /.compiled-lang
   ```

3. Add `package.json` `"scripts"`:

   ```
   "prestart": "npm run messages",
   "prebuild": "npm run messages",
   "messages": "formatjs-scripts",
   ```

4. Add translations

   1. Build project or run `npm run messages`
   2. Add translations for available locales next to `lang/<default locale>.json`
   3. Build project
