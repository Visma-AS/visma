# 1.0.0

- Upgrade to `@visma/react-app-locale-utils@^1.0.0`
- Upgrade to `@visma/react-intl-bundled-messages@^1.0.0`
- Set `@visma/public.config@^1.0.1` as a peer dependency

# 0.2.3

- Ignore `*.d.ts` files when searching for messages

# 0.2.2

- Improve searching messages in dependencies
- Upgrade to `@visma/react-intl-bundled-messages@0.1.5`

# 0.2.1

- Fix infinite recursion when searching for messages. Don't follow symbolic links.

# 0.2.0

- **Breaking:** Move `export { target }` to `@visma/react-intl-bundled-messages`
- If `remix.config.js` is available, detect `appDirectory` from it
- Scan also `jsx`, `ts` and `tsx` files for messages

# 0.1.4

- Fix package structure

# 0.1.3

- Update dependencies

# 0.1.2

- If in npm Workspace, search messages also from parent `node_modules` and sibling packages

# 0.1.1

- Fix initial build when `lang` directory is created

# 0.1.0

- Initial release
