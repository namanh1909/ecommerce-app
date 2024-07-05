import { config } from '@/theme/_config';
import { staticGutterStyles } from '@/theme/gutters';

import type {
	ArrayValue,
	RemoveAfterSeparator,
	RemoveBeforeSeparator,
	ToNumber,
} from './common';

type Margins =
	| 'margin'
	| 'marginBottom'
	| 'marginTop'
	| 'marginRight'
	| 'marginLeft'
	| 'marginVertical'
	| 'marginHorizontal';

type MarginKeys = `${Margins}_${ArrayValue<typeof config.gutters>}`;

type MarginGutters = {
	[key in MarginKeys]: {
		[K in Extract<RemoveAfterSeparator<key>, Margins>]: ToNumber<
			RemoveBeforeSeparator<key>
		>;
	};
};

type Heights = `height_${ArrayValue<typeof config.gutters>}`;
type Widths = `width_${ArrayValue<typeof config.gutters>}`;

type HeightGutters = {
	[key in Heights]: {
		height: ToNumber<RemoveBeforeSeparator<key>>;
	};
};

type WidthGutters = {
	[key in Widths]: {
		width: ToNumber<RemoveBeforeSeparator<key>>;
	};
};

type Paddings =
	| 'padding'
	| 'paddingBottom'
	| 'paddingTop'
	| 'paddingRight'
	| 'paddingLeft'
	| 'paddingVertical'
	| 'paddingHorizontal';

type PaddingKeys = `${Paddings}_${ArrayValue<typeof config.gutters>}`;

type PaddingGutters = {
	[key in PaddingKeys]: {
		[K in Extract<RemoveAfterSeparator<key>, Paddings>]: ToNumber<
			RemoveBeforeSeparator<key>
		>;
	};
};

type Gaps = `gap_${ArrayValue<typeof config.gutters>}`;

type GapGutters = {
	[key in Gaps]: {
		gap: ToNumber<RemoveBeforeSeparator<key>>;
	};
};

export type Gutters = MarginGutters &
	PaddingGutters &
	GapGutters &
	HeightGutters &
	WidthGutters;
typeof staticGutterStyles;
