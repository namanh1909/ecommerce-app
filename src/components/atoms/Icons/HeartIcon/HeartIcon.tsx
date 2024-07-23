import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = {
	fillProps?: string;
} & SvgProps;

function HeartIcon(props: Props) {
	return (
		<Svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
			<Path
				d="M19 6.411h-.009C18.944 3.55 16.704 1 13.938 1c-1.6 0-3.01.867-3.938 2.14C9.072 1.867 7.662 1 6.062 1 3.296 1 1.056 3.55 1.009 6.411H1c0 .018.003.034.003.051 0 .013-.003.026-.003.04 0 .08.019.141.023.218C1.27 14.011 9.929 17 9.929 17s8.786-2.986 9.046-10.269c.005-.081.025-.145.025-.229 0-.014-.003-.027-.003-.04 0-.019.003-.034.003-.051z"
				stroke="#FE49A6"
				strokeWidth={2}
			/>
		</Svg>
	);
}

export default HeartIcon;
