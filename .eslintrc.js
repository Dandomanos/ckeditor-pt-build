module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['eslint:recommended', 'standard', 'prettier', 'prettier/standard'],
	rules: {
		'no-var': 1,
		'prefer-const': 1,
		'no-console': process.env.NODE_ENV !== 'development' ? 1 : 0,
		'no-debugger': process.env.NODE_ENV !== 'development' ? 1 : 0,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
}
