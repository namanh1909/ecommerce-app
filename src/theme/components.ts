import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/types/theme/theme';

interface AllStyle
	extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> {}

export default ({ layout, backgrounds, fonts, gutters }: ComponentTheme) => {
	return {
		buttonCircle: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.purple100,
			...fonts.gray400,
			height: 70,
			width: 70,
			borderRadius: 35,
		},
		buttonHalfCircle: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.purple100,
			...fonts.gray400,
			height: 70,
			width: 70,
			borderRadius: 16,
		},
		circle250: {
			borderRadius: 140,
			height: 250,
			width: 250,
		},
		btn: {
			...layout.justifyCenter,
			...layout.itemsCenter,
			...backgrounds.purple100,
			...fonts.gray400,
			height: 70,
			width: 70,
			borderRadius: 16,
		},
		textGray: {
			...fonts.gray200,
			...fonts.medium,
		},
		textBtn: {
			...fonts.size_16,
			...fonts.blue,
			...fonts.medium,
			textTransform: 'uppercase',
		},
		h2: {
			...fonts.size_18,
			...fonts.medium,
		},
	} as const satisfies AllStyle;
};
