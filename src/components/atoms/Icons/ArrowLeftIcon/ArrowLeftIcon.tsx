import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ArrowLeftIcon(props: SvgProps) {
  return (
    <Svg width={32} height={12} viewBox="0 0 32 12" fill="none" {...props}>
      <Path d="M32 6H5.458" stroke="#4090FE" strokeWidth={2} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12V0L0 6l6 6z"
        fill="#4090FE"
      />
    </Svg>
  );
}

export default ArrowLeftIcon;
