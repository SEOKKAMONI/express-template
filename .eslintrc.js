module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
  },
};
