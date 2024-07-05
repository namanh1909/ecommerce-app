import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function ArrowRightIcon(props: SvgProps) {
	return (
		<Svg width={32} height={12} viewBox="0 0 32 12" fill="none" {...props}>
			<Path d="M0 6h26.542" stroke="#4090FE" strokeWidth={2} />
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M26 12V0l6 6-6 6z"
				fill="#4090FE"
			/>
		</Svg>
	);
}

export default ArrowRightIcon;
