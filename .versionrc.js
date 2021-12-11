// https://github.com/expo-community/standard-version-expo
module.exports = {
	bumpFiles: [
		{
			filename: 'package.json',
		},
		{
			filename: 'app.json',
			updater: require.resolve('standard-version-expo/android'), // https://github.com/expo-community/standard-version-expo#version-code
		},
		{
			filename: 'app.json',
			updater: require.resolve('standard-version-expo/ios'),
		},
	],
};
