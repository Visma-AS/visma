# Visma

Tools and other utilities by Frontend discipline and contributors.

![vfd-v3](https://user-images.githubusercontent.com/93318583/139228787-1082d2db-e721-4aa1-a48b-57e69870427c.png)

## How to add a new package?

1. Use one of the built-in templates to get started:

   ```sh
   npm install
   npx yo @visma/visma
   ```

2. If the package has files to be deployed to GitHub Pages, add paths to [actions.yml](.github/workflows/actions.yml#L62-L64)
3. When you are ready to publish, create a pull request. CI will publish a new version from the main branch if the version changes.

## Package guidelines

- Make sure there is not already a package for the same purpose. Really, there area packages for almost everything on npm.
- Keep the number of features small. A small package is more composable and usually has more real world use cases, then a package that does multiple things.

  > Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
  >
  > — Antoine de Saint-Exupery

- For other than tools, always use TypeScript or add types manually

### Naming

- Every package should use the `@visma` scope
- If the package is for a specific technology, prefix with that. Examples:
  - `@visma/react-foo`
  - `@visma/babel-preset-bar`
  - `@visma/angular-baz`
  - `@visma/mui-qux`
- If the package is an integration between external packages, have each name listed alphabetically, join using kebab case, and suffix with `-integration`. Example:
  - `@visma/msw-openapi-backend-integration`

### Versioning

Follow [SemVer](https://semver.org/). Also, it is recommended:

- `0.1.0` to be the **first release**
- For the first year keep versions in the `0.y.z` range, where **y**: breaking changes, **z**: other changes
- Release `1.0.0` 1 year after the first release, regardless of the change. This ensures the public API has time to be defined, and the package won't stay years in the initial development phase.
- For breaking changes use [React’s approach](https://reactjs.org/blog/2016/02/19/new-versioning-scheme.html#breaking-changes)

### Readme

README.md is required. If applicable, readme should include at least a usage example and documentation of the public API.

Install instructions or any other general things should not be included, unless there is something special to mention.

### Changelog

Include a CHANGELOG.md file.

### Tests

`package.json` may have a `"test"` script. CI makes sure tests are passed before publishing.
