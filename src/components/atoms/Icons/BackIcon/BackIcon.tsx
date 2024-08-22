import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function BackIcon(props: SvgProps) {
  return (
    <Svg width={45} height={45} viewBox="0 0 45 45" fill="none" {...props}>
      <Circle cx={22.5} cy={22.5} r={22.5} fill="#F5F6FA" />
      <Path
        d="M14.427 22.786h15.625M20.729 29.061l-6.302-6.275 6.302-6.276"
        stroke="#1D1E20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default BackIcon;
