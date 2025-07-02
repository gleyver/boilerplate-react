import type { StorybookConfig } from '@storybook/react-vite'
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    config.resolve = config.resolve || {}
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@components': resolve(__dirname, '../src/components'),
      '@assets': resolve(__dirname, '../src/assets'),
      '@styles': resolve(__dirname, '../src/styles'),
      '@config': resolve(__dirname, '../src/config'),
      '@contexts': resolve(__dirname, '../src/contexts'),
      '@hooks': resolve(__dirname, '../src/hooks'),
      '@stores': resolve(__dirname, '../src/stores'),
      '@types': resolve(__dirname, '../src/types'),
      '@utils': resolve(__dirname, '../src/utils'),
      '@domains': resolve(__dirname, '../src/domains'),
      '@user': resolve(__dirname, '../src/domains/user'),
      '@products': resolve(__dirname, '../src/domains/products'),
    }
    return config
  },
}
export default config
