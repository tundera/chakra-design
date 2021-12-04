const tsconfigPaths = require('vite-tsconfig-paths').default

module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-addon-performance/register',
  ],
  typescript: {
    reactDocgen: false,
  },
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths()],
      optimizeDeps: {
        ...config.optimizeDeps,
        entries: [
          '../packages/**/*.stories.mdx',
          '../packages/**/*.stories.@(js|jsx|ts|tsx)',
        ],
      },
    }
  },
}
