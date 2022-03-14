import { useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';

import AnalyticsService from '../services/analytics.service';

const useAppState = () => {
	const appState = useRef(AppState.currentState);

	useEffect(() => {
		AppState.addEventListener('change', handleAppStateChange);

		return () => {
			AppState.removeEventListener('change', handleAppStateChange);
		};
	}, []);

	const handleAppStateChange = (nextAppState: AppStateStatus) => {
		if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
			AnalyticsService.logAppForeground();
		}

		if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
			AnalyticsService.logAppBackground();
		}

		appState.current = nextAppState;
	};
};

export default useAppState;
