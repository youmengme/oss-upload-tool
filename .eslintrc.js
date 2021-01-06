// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  extends: [
    'standard',
  ],
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-console': ["warn", { allow: ["warn", "error"] }],
    'eol-last': 0,
    'semi': ["error", "never"],
    'comma-dangle': 0,
    'no-trailing-spaces': 0,
    'space-before-function-paren': 0,
    'no-new': 0,
    'comma-spacing': 0,
    'camelcase': 0,
    'prefer-promise-reject-errors': 0,
    'no-return-assign': 0,
    'no-return-await': 0,
    'no-extend-native': 0,
    'no-unused-expressions': 0,
    'vue/valid-v-for': 0,
  }
}
