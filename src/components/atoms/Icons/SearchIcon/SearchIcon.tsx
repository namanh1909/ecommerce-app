import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = {
  fillProps?: string;
} & SvgProps;

function SearchIcon(props: Props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M9.805 17.296a7.49 7.49 0 100-14.981 7.49 7.49 0 000 14.981zM15.015 15.404l2.937 2.93"
        stroke="#8F959E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SearchIcon;
