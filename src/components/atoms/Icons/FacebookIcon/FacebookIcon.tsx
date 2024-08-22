import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function FacebookIcon(props: SvgProps) {
  return (
    <Svg width={9} height={16} viewBox="0 0 9 16" fill="none" {...props}>
      <Path
        d="M5.734 15.333v-6.69H7.98l.336-2.607H5.734V4.37c0-.755.21-1.27 1.293-1.27h1.38V.77A18.504 18.504 0 006.395.667c-1.99 0-3.353 1.215-3.353 3.446v1.923H.791v2.607h2.251v6.69h2.692z"
        fill="#FEFEFE"
      />
    </Svg>
  );
}

export default FacebookIcon;
