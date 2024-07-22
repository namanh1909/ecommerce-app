import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function CloseEyesIcon(props: SvgProps) {
  return (
    <Svg width={22} height={19} viewBox="0 0 22 19" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.922 13.8l3.17 3.17-1.06 1.061L3.06 1.061 4.12 0l2.74 2.738A11.9 11.9 0 0111 2c4.808 0 8.972 2.848 11 7a12.66 12.66 0 01-4.078 4.8zM9.824 5.703l4.473 4.473a3.5 3.5 0 00-4.474-4.474l.001.001zm5.317 9.56c-1.326.49-2.728.74-4.141.737-4.808 0-8.972-2.848-11-7a12.66 12.66 0 014.078-4.8l3.625 3.624a3.5 3.5 0 004.474 4.474l2.964 2.964v.001z"
        fill="#000"
      />
    </Svg>
  );
}

export default CloseEyesIcon;
