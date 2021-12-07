/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  browserBuildDirectory: 'public/build',
  publicPath:
    process.env.NODE_ENV === 'development'
      ? '/build/'
      : '/visma/christmas-elf-name-generator/build/',
  serverBuildDirectory: 'build',
  devServerPort: 8002,
};
