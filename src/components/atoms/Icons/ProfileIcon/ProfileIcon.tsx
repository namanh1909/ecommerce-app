import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = {
	fillProps?: string;
} & SvgProps;

function ProfileIcon(props: Props) {
	return (
		<Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
			<Path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M14.039 10.157a6.328 6.328 0 10-10.078 0A4.499 4.499 0 000 14.625v1.002A2.376 2.376 0 002.373 18h13.254A2.376 2.376 0 0018 15.627v-1.002a4.499 4.499 0 00-3.961-4.468zM9 1.687a4.64 4.64 0 110 9.282 4.64 4.64 0 010-9.281zm6.627 14.626a.685.685 0 00.685-.686v-1.002a2.813 2.813 0 00-2.812-2.813h-1.34a6.331 6.331 0 01-6.32 0H4.5a2.813 2.813 0 00-2.813 2.813v1.002c0 .379.307.685.686.685h13.254z"
				fill={props.fillProps}
			/>
		</Svg>
	);
}

export default ProfileIcon;
