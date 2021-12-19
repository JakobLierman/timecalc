import { Android, ExpoConfig, IOS, Splash } from '@expo/config-types';

import packageJson from './package.json';

const asset = (fileName: string): string => `./src/assets/images/${fileName}`;

export default ({ config }: { config: ExpoConfig }): ExpoConfig => {
	const primaryColor = '#D7263D';

	const splashConfig: Splash = {
		...config.splash,
		image: asset('splash.png'),
		resizeMode: 'contain',
		backgroundColor: primaryColor,
	};

	const iosConfig: IOS = {
		...config.ios,
		supportsTablet: true,
		infoPlist: {
			CFBundleAllowMixedLocalizations: true,
			RCTAsyncStorageExcludeFromBackup: false,
		},
	};

	const androidConfig: Android = {
		...config.android,
		adaptiveIcon: {
			foregroundImage: asset('adaptive-icon.png'),
			backgroundColor: primaryColor,
		},
	};

	return {
		...config,
		slug: packageJson.name,
		description: packageJson.description,
		githubUrl: packageJson.repository.url,
		version: packageJson.version,
		primaryColor,
		orientation: 'portrait',
		icon: asset('icon.png'),
		splash: splashConfig,
		updates: {
			fallbackToCacheTimeout: 0,
		},
		jsEngine: 'hermes',
		assetBundlePatterns: ['**/*'],
		ios: iosConfig,
		android: androidConfig,
		androidStatusBar: {
			barStyle: 'light-content',
			translucent: true,
		},
		androidNavigationBar: {
			barStyle: 'light-content',
			backgroundColor: primaryColor,
		},
	};
};
