import appConfig from '../../../app.json';

import { TTranslation } from './i18n.type';

const translations: TTranslation = {
	title: appConfig.expo.name,
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
