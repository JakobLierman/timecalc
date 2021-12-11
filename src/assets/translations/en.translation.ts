import { applicationName } from 'expo-application';

import { TTranslation } from './i18n.type';

const translations: TTranslation = {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	title: applicationName!,
	back: 'Back',
	duration: {
		title: 'Duration',
	},
	endTime: {
		title: 'End Time',
	},
	accuracy: {
		title: 'Accuracy',
		inMinutes: 'in minutes',
	},
	result: {
		title: 'Result',
		exactTime: 'Exact time:',
	},
};

export default translations;
