module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'eslint:recommended',
		'standard',
		'prettier',
		'prettier/standard',
	],
	rules: {
		'no-var': 1,
		'prefer-const': 1,
		'no-console': process.env.NODE_ENV !== 'development' ? 1 : 0,
		'no-debugger': process.env.NODE_ENV !== 'development' ? 1 : 0,
		'vue/require-v-for-key': 0,
		'vue/valid-v-on': 0,

		'vue/component-name-in-template-casing': 0,
		'vue/attribute-hyphenation': 0,
		'vue/no-v-html': 0,
		'vue/mustache-interpolation-spacing': 1,

		'vue/no-unused-vars': 0,
		'vue/no-unused-components': 0,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
}