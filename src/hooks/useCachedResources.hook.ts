import { useEffect, useState } from 'react';

import fonts from '../assets/fonts';

export default () => {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		const loadResourcesAndDataAsync = async () => {
			try {
				// Load fonts
				await fonts.init();
			} finally {
				setLoadingComplete(true);
			}
		};

		// We might want to provide this error information to an error reporting service
		loadResourcesAndDataAsync().then().catch(console.error);
	}, []);

	return isLoadingComplete;
};
