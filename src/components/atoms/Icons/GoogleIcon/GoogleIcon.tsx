import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function GoogleIcon(props: SvgProps) {
	return (
		<Svg width={30} height={30} viewBox="0 0 30 19" fill="none" {...props}>
			<Path
				d="M26.51 5.192v2.504h2.57V10.2h-2.57v2.504h-2.57V10.2h-2.57V7.696h2.57V5.192h2.57zM3.383 15.207C-.043 11.87-.043 6.027 3.526 2.69 6.096.185 9.807-.371 13.09.88l1.284.696 1.428.974-2.284 2.225-.857-.556c-1.998-1.252-4.853-.974-6.71.834-2.14 2.087-2.283 5.843 0 8.068 2.142 2.226 5.997 2.226 7.995 0 .571-.556 1.142-1.39 1.285-2.226v-.278h-5.14V7.835h8.138l.143.696v1.947c-.143 1.809-.857 3.617-2.142 4.869-3.426 3.199-9.422 3.199-12.848-.14z"
				fill="#fff"
			/>
		</Svg>
	);
}

export default GoogleIcon;
