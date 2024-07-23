import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = {
	fillProps?: string;
} & SvgProps;

function SearchIcon(props: Props) {
	return (
		<Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9.778 17.111a7.334 7.334 0 110-14.667 7.334 7.334 0 010 14.667zm11.864 2.803l-4.14-4.141a9.731 9.731 0 002.054-5.995c0-5.4-4.378-9.778-9.778-9.778S0 4.378 0 9.778s4.378 9.778 9.778 9.778c2.26 0 4.34-.767 5.995-2.054l4.14 4.14a1.22 1.22 0 101.729-1.728z"
				fill={props.fillProps}
			/>
		</Svg>
	);
}

export default SearchIcon;
