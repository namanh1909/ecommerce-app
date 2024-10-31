import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function DoneIcon(props: SvgProps) {
  return (
    <Svg width={14} height={9} viewBox="0 0 14 9" fill="none" {...props}>
      <Path
        d="M1.167 4l4.166 4.167 7.5-7.5"
        stroke="#34C358"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default DoneIcon;
