import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

let scriptHostname;

if (__DEV__) {
	const scriptURL = NativeModules.SourceCode.scriptURL;
	scriptHostname = scriptURL.split('://')[1].split(':')[0];
}

const reactotron = Reactotron.configure({ host: __DEV__ ? scriptHostname : 'Mediafin' })
	.useReactNative()
	.connect();

const yeOldeConsoleLog = console.log;

// make a new one
console.log = (...args) => {
	// always call the old one, because React Native does magic swizzling too
	yeOldeConsoleLog(...args);

	// send this off to Reactotron.
	Reactotron.log(...args);
};

export default reactotron;
