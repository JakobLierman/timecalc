import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import { useCachedResources, useColorScheme } from './hooks';
import darkTheme from './styles/dark.theme';
import defaultTheme from './styles/default.theme';

export const App: FC = () => {
	const isLoadingComplete = useCachedResources();
	const isDarkMode = useColorScheme() === 'dark';

	if (!isLoadingComplete) return null;

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : defaultTheme}>
			<SafeAreaProvider />
		</ThemeProvider>
	);
};
