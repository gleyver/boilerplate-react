import config from './changelog.config.mjs'

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', config.list],
  },
}
