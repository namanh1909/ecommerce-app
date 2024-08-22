import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

type Props = {
  fillProps?: string;
} & SvgProps;

function CartIcon(props: Props) {
  return (
    <Svg width={45} height={45} viewBox="0 0 45 45" fill="none" {...props}>
      <Circle cx={22.5} cy={22.5} r={22.5} fill="#F5F6FA" />
      <Path
        clipRule="evenodd"
        d="M17.798 32.396h8.696c3.194 0 5.644-1.154 4.948-5.797l-.81-6.293c-.43-2.317-1.907-3.204-3.204-3.204H16.826c-1.316 0-2.708.954-3.204 3.204l-.81 6.293c-.592 4.119 1.792 5.797 4.986 5.797z"
        stroke="#1D1E20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.655 16.873a4.5 4.5 0 014.5-4.5 4.5 4.5 0 014.52 4.5M19.066 21.564h.048M25.14 21.564h.048"
        stroke="#1D1E20"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CartIcon;
