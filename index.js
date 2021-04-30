module.exports = {
	extends: [
		'plugin:@shopify/typescript',
		'plugin:@shopify/typescript-type-checking',
		'plugin:jsx-a11y/recommended',
		'plugin:promise/recommended',
		'plugin:react-hooks/recommended',
		'plugin:unicorn/recommended',
		'plugin:@shopify/prettier',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
}
