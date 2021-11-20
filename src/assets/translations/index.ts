import * as Localization from 'expo-localization';
import I18n from 'i18n-js';

import en from './en.translation';

const init = (): void => {
	I18n.translations = {
		en,
	};
	I18n.locale = Localization.locale;
	I18n.defaultLocale = 'en';
	I18n.fallbacks = true;
};

export default { init };
