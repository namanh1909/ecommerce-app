import { ViewStyle } from 'react-native';
import { config } from '@/theme/_config';

export default {
	col: {
		flexDirection: 'column',
	},
	colReverse: {
		flexDirection: 'column-reverse',
	},
	wrap: {
		flexWrap: 'wrap',
	},
	row: {
		flexDirection: 'row',
	},
	rowReverse: {
		flexDirection: 'row-reverse',
	},
	itemsCenter: {
		alignItems: 'center',
	},
	itemsStart: {
		alignItems: 'flex-start',
	},
	itemsStretch: {
		alignItems: 'stretch',
	},
	itemsEnd: {
		alignItems: 'flex-end',
	},
	justifyCenter: {
		justifyContent: 'center',
	},
	justifyAround: {
		justifyContent: 'space-around',
	},
	justifyBetween: {
		justifyContent: 'space-between',
	},
	justifyEnd: {
		justifyContent: 'flex-end',
	},
	justifyStart: {
		justifyContent: 'flex-start',
	},
	/* Sizes Layouts */
	flex_1: {
		flex: 1,
	},
	flex_2: {
		flex: 2,
	},
	fullWidth: {
		width: '100%',
	},
	fullHeight: {
		height: '100%',
	},
	height_150: {
		height: 150
	},
	width_300: {
		width: 300
	},
	/* Positions */
	relative: {
		position: 'relative',
	},
	absolute: {
		position: 'absolute',
	},
	top0: {
		top: 0,
	},
	bottom0: {
		bottom: 0,
	},
	left0: {
		left: 0,
	},
	right0: {
		right: 0,
	},
	right10: {
		right: 10,
	},
	z1: {
		zIndex: 1,
	},
	z10: {
		zIndex: 10,
	},
	z99: {
		zIndex: 99,
	},
	overflow_hidden: {
		overflow: 'hidden'
	}
} as const satisfies Record<string, ViewStyle>;
