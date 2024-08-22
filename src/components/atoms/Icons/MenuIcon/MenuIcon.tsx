import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

type Props = {
  fillProps?: string;
} & SvgProps;

function MenuIcon(props: Props) {
  return (
    <Svg width={45} height={45} viewBox="0 0 45 45" fill="none" {...props}>
      <Circle cx={22.5} cy={22.5} r={22.5} fill="#F5F6FA" />
      <Path
        d="M19.25 28h12.5M13 23h18.75M13 18h12.5"
        stroke="#1D1E20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default MenuIcon;
