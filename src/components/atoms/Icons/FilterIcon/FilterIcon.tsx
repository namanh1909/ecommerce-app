import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = {
	fillProps?: string;
} & SvgProps;

function FilterIcon(props: SvgProps) {
	return (
		<Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
			<Path
				d="M19 2.895H1M19 10H1M19 17.105H1"
				stroke="#4090FE"
				strokeWidth={1.9}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M2.895 10a1.895 1.895 0 103.79 0 1.895 1.895 0 00-3.79 0zM8.105 2.895a1.895 1.895 0 103.79 0 1.895 1.895 0 00-3.79 0zM13.316 17.105a1.895 1.895 0 103.79 0 1.895 1.895 0 00-3.79 0z"
				fill="#fff"
				stroke="#4090FE"
				strokeWidth={1.9}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</Svg>
	);
}

export default FilterIcon;
