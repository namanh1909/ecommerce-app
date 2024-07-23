import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = {
	fillProps?: string;
} & SvgProps;

function SettingIcon(props: Props) {
	return (
		<Svg width={22} height={16} viewBox="0 0 22 16" fill="none" {...props}>
			<Path
				d="M7.112 2.567h13.606c.509 0 .922-.564.922-1.258 0-.694-.413-1.257-.922-1.257H7.112c-.51 0-.922.563-.922 1.257s.412 1.258.922 1.258zM20.383 6.338H1.84a1.258 1.258 0 000 2.514h18.543a1.258 1.258 0 000-2.514zM20.717 12.52H7.112c-.51 0-.922.563-.922 1.256 0 .694.413 1.258.922 1.258h13.606c.509 0 .922-.564.922-1.258 0-.694-.413-1.257-.923-1.257z"
				fill={props.fillProps}
			/>
		</Svg>
	);
}

export default SettingIcon;
