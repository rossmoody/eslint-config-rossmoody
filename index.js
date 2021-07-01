module.exports = {
  extends: [
    'plugin:@shopify/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:@shopify/prettier',
    'plugin:@shopify/typescript-type-checking',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
}
