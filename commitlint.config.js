module.exports = {
	extends: ['@commitlint/config-conventional'],
	plugins: [
		{
			rules: {
				'issue-in-scope': (input) => [
					input.scope && input.scope.match(/^((?!([A-Z0-9a-z]{1,10})-?$)#[1-9][0-9]*)$/g),
					'Your scope should contain an issue number (ex. feat(#123): description)',
				],
			},
		},
	],
	rules: {
		'scope-empty': [2, 'never'],
		'issue-in-scope': [2, 'always'],
	},
};
