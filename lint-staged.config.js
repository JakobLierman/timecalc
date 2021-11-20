module.exports = {
	'*.{js,jsx,ts,tsx}': 'eslint --cache --cache-file node_modules/.cache/.eslintcache --fix',
	'*.{js,jsx,ts,tsx,css}': 'prettier --write',
};
