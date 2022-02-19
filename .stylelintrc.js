module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier-scss'
  ],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['**/node_modules/**', '**/.nuxt/**', '**/dist/**'],
  rules: {
    // 'at-rule-no-unknown': false,
    'scss/at-rule-no-unknown': true,
    'string-quotes': 'single',
    'block-no-empty': null,
    'number-leading-zero': null,
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    indentation: 2,
    'length-zero-no-unit': true,
    'media-feature-name-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'no-invalid-position-at-import-rule': null,
    'no-irregular-whitespace': null,
    // prettierのインラインスタイルの末尾のコロンを削除するとコンフリクトしないための設定
    'declaration-block-trailing-semicolon': null,
    // ::v-deepエラー回避
    'selector-pseudo-class-no-unknown': null
  }
}