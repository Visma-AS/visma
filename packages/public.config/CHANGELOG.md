# 1.0.4

- Fix ESM issue

# 1.0.3

- Fix CommonJS issue: Switch to `lodash`

# 1.0.2

- Fix deduping `axios`. Accept wider range of versions.

# 1.0.1

- Fix unavailable `location` issue in Node.js
- Switch to `lodash-es`

# 1.0.0

- **Breaking:** Reading `<root>/public.config.json` and use of Webpack alias are removed. Use `.env` for build time values.
- **Breaking:** `@visma/public.config` no longer exports the config. Read values from `globalThis.ENV`.

# 0.1.1

- Fix build

# 0.1.0

- Initial release
