# Visma

Tools, snippets, helpers and other utility packages by Frontend discipline and contributors.

Contributions are welcome!

![vfd-v3-transparent](https://user-images.githubusercontent.com/93318583/139236084-749639e8-c743-4c1b-9259-bfa26c251d00.png)

## Packages

### Plugins & Presets

- [@visma/babel-preset-formatjs](/packages/babel-preset-formatjs) – [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin/) with `removeDefaultMessage` set `true` in production
- [@visma/craco-plugin-super-template](/packages/craco-plugin-super-template) – [CRACO](https://github.com/gsoft-inc/craco) plugin for [@visma/cra-template-craco-super-template](/packages/cra-template-craco-super-template)

### Templates

- [@visma/cra-template-craco-super-template](/packages/cra-template-craco-super-template) – [Create React App](https://create-react-app.dev/) template with multiple preinstalled libraries and predefined configurations

### Tools

- [@visma/build-npm-workspace](/packages/build-npm-workspace) – Build npm workspace packages in the correct order of internal dependency graph
- [@visma/christmas-elf-name-generator](/packages/christmas-elf-name-generator) – With this high-level neural network -assisted [Christmas Elf Name Generator](https://visma-as.github.io/visma/christmas-elf-name-generator/), you can now generate your own custom elf name just in time for Christmas!
- [@visma/formatjs-scripts](/packages/formatjs-scripts) – Extract and compile messages, scan `node_modules` for messages
- [@visma/generator-visma](/packages/generator-visma) – [Yeoman](https://yeoman.io) npm package generator for this repository
- [@visma/react-openapi-client-generator](/packages/react-openapi-client-generator) – Generate typed hooks and methods for React app from OpenAPI schema
- [@visma/remix-ssg](/packages/remix-ssg) – Generate static site from Remix app

### Helpers & Utilities

- [@visma/msw-openapi-backend-integration](/packages/msw-openapi-backend-integration) – Helper to integrate [Mock Service Worker](https://mswjs.io/) with [OpenAPI Backend](https://github.com/anttiviljami/openapi-backend)
- [@visma/react-app-locale-utils](/packages/react-app-locale-utils) – Locale state, display names, date-fns, MUI and other locale utilities
- [@visma/react-app-super-template](/packages/react-app-super-template) – `AppProvider` for [@visma/cra-template-craco-super-template](/packages/cra-template-craco-super-template)
- [@visma/react-intl-bundled-messages](/packages/react-intl-bundled-messages) – [`IntlProvider`](https://formatjs.io/docs/react-intl/components/) that lazy loads messages in [current language](/packages/react-app-locale-utils#usage) in Webpack environment
- [@visma/react-keycloak](/packages/react-keycloak) – Keycloak helper components, hooks, etc.
- [@visma/tailwindcss-vud](/packages/tailwindcss-vud) – [Visma Unified Design](https://ux.visma.com/guidelines-resources/) theme configuration for [tailwindcss](https://tailwindcss.com)
- ~[@visma/tailwindcss-nordic-cool](/packages/tailwindcss-nordic-cool) – [Nordic cool](https://ux.visma.com/weblibrary/latest/) theme configuration for [tailwindcss](https://tailwindcss.com)~ (deprecated)

### Configs

- [@visma/public.config](/packages/public.config) – Runtime and build time configs by hostname
- [@visma/tsconfig](/packages/tsconfig) – TSConfig, mainly for this repository

## How to add a new package?

1. Clone this repository
2. Use one of the built-in templates to get started (alternatively add `packages/<new-package>` files manually):

   ```sh
   npm install
   npx yo @visma/visma
   ```

3. If the package has files to be deployed to GitHub Pages, add paths to [actions.yml](.github/workflows/actions.yml#L62-L64)
4. When you are ready to publish, create a pull request. CI will publish a new version from the main branch if the version changes.

## Package guidelines

- Make sure there is not already a package for the same purpose. Really, there area packages for almost everything on npm.
- Keep the number of features small. A small package is more composable and usually has more real world use cases, then a package that does multiple things.

  > Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
  >
  > — Antoine de Saint-Exupery

- For other than tools, always use TypeScript or add types manually

### Naming

- Every package must use the `@visma` scope
- If the package is for a specific technology, prefix with that. Examples:
  - `@visma/react-foo`
  - `@visma/babel-preset-bar`
  - `@visma/angular-baz`
  - `@visma/mui-qux`
- If the package is an integration between external packages, list names alphabetically, join using kebab case, and suffix with `-integration`. Example:
  - `@visma/msw-openapi-backend-integration`

### Versioning

Follow [SemVer](https://semver.org/). Also, it is recommended:

- `0.1.0` to be the **first release**
- For the first year keep versions in the `0.y.z` range, where **y**: breaking changes, **z**: other changes
- Release `1.0.0` 1 year after the first release, regardless of the change. This ensures the public API has time to be defined, and the package won't stay years in the initial development phase.
- For breaking changes use [React’s approach](https://reactjs.org/blog/2016/02/19/new-versioning-scheme.html#breaking-changes)

### Readme

README.md is required. If applicable, readme should include at least a usage example and documentation of the public API.

Install instructions or other general information should not be included, unless there is something special to mention.

### Changelog

Include a CHANGELOG.md file ([example](/packages/react-app-locale-utils/CHANGELOG.md)).

### Tests

`package.json` may have a `test` script. CI makes sure tests are passed before publishing.

## Help / Contact

In any questions or suggestions, feel free to reach out to [@ArnoSaine](https://github.com/ArnoSaine).
