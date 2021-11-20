import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

import fonts from '../assets/fonts';
import i18n from '../assets/translations';

export default () => {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		const loadResourcesAndDataAsync = async () => {
			try {
				// Do not hide splash screen
				SplashScreen.preventAutoHideAsync();
				// Load translations
				await i18n.init();
				// Load fonts
				await fonts.init();
			} finally {
				setLoadingComplete(true);
				// Hide splash screen
				SplashScreen.hideAsync();
			}
		};

		// We might want to provide this error information to an error reporting service
		loadResourcesAndDataAsync().then().catch(console.error);
	}, []);

	return isLoadingComplete;
};
