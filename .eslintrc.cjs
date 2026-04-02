module.exports = {
  root: true,
  globals: {
    __APP_VERSION__: 'readonly'
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 10
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/singleline-html-element-content-newline': ['off'],
    'vue/multi-word-component-names': ['off'],
    'vue/html-self-closing': ['off']
  }
};
