import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function EyesIcon(props: SvgProps) {
  return (
    <Svg width={22} height={14} viewBox="0 0 22 14" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 7c2.028-4.152 6.192-7 11-7s8.972 2.848 11 7c-2.028 4.152-6.192 7-11 7S2.028 11.152 0 7zm11 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        fill="#000"
      />
    </Svg>
  );
}

export default EyesIcon;
