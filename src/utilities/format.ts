import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import i18next from 'i18next';

dayjs.locale('ja');

export const YYYYMMDD_JP = 'YYYY年MM月DD日';
export const YYYYMMDD = 'YYYY/MM/DD';
export const DDMM = 'DD/MM';

export const changeLocale = (locale: string): void => {
	dayjs.locale(locale);
};
export const toLocalStringTime = (date: Date): string => {
	return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
};

export const requireField = (field: string) => {
	return i18next.t('error.require', { field }) || '';
};

export const formatDate = (
	date: Date | string | number,
	defaultFormat = YYYYMMDD,
) => {
	if (!date) return '';
	return `${dayjs(date).format(defaultFormat)}`;
};

export const formatDateProfile = (date: any) => {
	// return date.toLocaleDateString('en-GB', {
	//     day: '2-digit',
	//     month: 'short',
	//     year: 'numeric',
	// });
	// const day = String(date.getDate()).padStart(2, '0');
	// const month = date.toLocaleString('default', { month: 'short' });
	// const year = date.getFullYear();
	// return `${day}/${month}/${year}`;
};
