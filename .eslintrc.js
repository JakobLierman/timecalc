module.exports = {
	root: true,
	parser: '@typescript-eslint/parser', // Specifies the ESLint parser
	parserOptions: {
		ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
		ecmaFeatures: {
			jsx: true, // Allows for the parsing of JSX
		},
	},
	plugins: [
		'react',
		'react-native',
		'import',
		'node',
		'eslint-plugin-jsdoc',
		'eslint-plugin-prefer-arrow',
		'eslint-plugin-react',
		'prettier',
		'@typescript-eslint',
	],
	settings: {
		react: {
			version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', './'],
			},
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'@react-native-community',
		'prettier',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	rules: {
		'padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{ blankLine: 'always', prev: '*', next: 'block' },
			{ blankLine: 'always', prev: '*', next: 'block-like' },
			{ blankLine: 'always', prev: 'block-like', next: '*' },
			{ blankLine: 'always', prev: 'block', next: '*' },
		],
		'import/order': [
			'warn',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc',
				},
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
				'newlines-between': 'always',
			},
		],
		'import/namespace': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'react-hooks/exhaustive-deps': 'off',
		'react-native/no-inline-styles': 'warn',
	},
};
