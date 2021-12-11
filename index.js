/// <reference types="@welldone-software/why-did-you-render" />

import { registerRootComponent } from 'expo';
import React from 'react';

import { App } from './src/App';

if (__DEV__) {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const whyDidYouRender = require('@welldone-software/why-did-you-render');
	whyDidYouRender(React);
}

registerRootComponent(App);
