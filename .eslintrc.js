module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-async-promise-executor': 'warn',
    'consistent-return': 'warn',
    'new-cap': 'warn',
    'max-len': [
      'warn',
      {
        code: 150,
      },
    ],
  },
};
