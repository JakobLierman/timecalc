import React, { FC } from 'react';

import { useCachedResources, useColorScheme } from './hooks';

export const App: FC = () => {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) return null;

	return (
	);
};
