module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential', 'prettier'],
  // required to lint *.vue files
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        arrowParens: 'always',
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        vueIndentScriptAndStyle: true
      }
    ]
  }
}
