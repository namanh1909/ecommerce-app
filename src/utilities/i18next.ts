import i18next from 'i18next';
import { getLocales } from 'react-native-localize';
import en from 'assets/locates/en';
import vi from 'assets/locates/vi';
import { initReactI18next } from 'react-i18next';
import { store } from 'app-redux/store';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';
import { updateLanguageKey } from 'app-redux/slices/languageSlice';

export type Resource = typeof en;
const DEFAULT_LANG = 'vi';

export function getLanguage() {
	const lan = getLocales();
	const listLng = ['en', 'vi'];
	try {
		const primaryLocate = lan[1];
		let tempLng = primaryLocate?.languageCode?.toLowerCase();
		if (tempLng === 'vi') {
			tempLng = 'vi';
		}
		const lng = listLng.includes(tempLng) ? tempLng : DEFAULT_LANG;
		// If you want to use DEFAULT_LANG only, comment above line + uncomment below line
		// const lng = DEFAULT_LANG;
		store.dispatch(updateLanguageKey(lng));
		return lng;
	} catch (error) {
		return DEFAULT_LANG;
	}
}

i18next.use(initReactI18next).init({
	compatibilityJSON: 'v3',

	interpolation: {
		escapeValue: false,
	},
	lng: store?.getState()?.languageKey?.data || getLanguage(),
	fallbackLng: DEFAULT_LANG,
	resources: {
		en: {
			translation: en,
		},
		vi: {
			translation: vi,
		},
	},
});

export const loadLocaleLanguage = () => {
	const lng = store?.getState()?.languageKey?.data || DEFAULT_LANG;
	dayjs.locale(lng);
	i18next.addResourceBundle(lng, 'translation', lng === 'en' ? en : vi);
	i18next.changeLanguage(lng);
};

export default i18next;
