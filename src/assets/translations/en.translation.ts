import app from '../../../app.json';

import { TTranslation } from './i18n.type';

const translations: TTranslation = {
	title: app.expo.name,
	accuracy: {
		title: 'Accuracy',
		inMinutes: 'in minutes',
	},
	result: {
		title: 'Result',
	},
};

export default translations;
