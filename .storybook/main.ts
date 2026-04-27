import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      docgen: 'react-docgen-typescript',
    },
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (process.env['NODE_ENV'] === 'production') {
      config.base = '/vellum-ds/'
    }
    // vite-plugin-dts is for the library build only — remove it here
    config.plugins = (config.plugins ?? []).filter(
      (p) => !(p && typeof p === 'object' && 'name' in p && p.name === 'vite:dts')
    )
    return config
  },
}

export default config
