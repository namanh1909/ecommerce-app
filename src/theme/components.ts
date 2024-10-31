import { ImageStyle, TextStyle, ViewStyle } from 'react-native';
import type { ComponentTheme } from '@/types/theme/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface AllStyle
	extends Record<string, AllStyle | ImageStyle | TextStyle | ViewStyle> { }

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
		tabContainer: {
			flexDirection: "row",
			borderTopColor: "#DEE2E6",
			justifyContent: "space-around",
			height: "8%",
			backgroundColor: "#ffff",
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 5,
			},
			shadowOpacity: 0.46,
			shadowRadius: 5,

			elevation: 17,
		},
		eventCard: {
			height: 150,
			padding: 10,
		},
		title: {
			fontSize: 18,
			fontFamily: "Inter-Medium",
		},
		label: {
			fontSize: 14,
			fontFamily: "Inter-Regular",
			color: '#8F959E'
		},
		des: {
			fontSize: 12,
			fontFamily: "Inter-Regular",
			color: '#8F959E',
			textAlign: "center"
		},
		viewAll: {
			fontSize: 14,
			color: '#8F959E',
			fontFamily: "Inter-Regular",

		},
		products: {
			container: {

			},
			title: {
				maxWidth: 150,
			},
			brand: {
				fontWeight: 'bold',
			},
			price: {
				fontSize: 18,
				fontWeight: 'bold'
			}
		}
	} as const satisfies AllStyle;
};
