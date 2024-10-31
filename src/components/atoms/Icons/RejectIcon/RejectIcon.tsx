import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = {
  fillProps?: string;
} & SvgProps;

function RejectIcon(props: Props) {
  return (
    <Svg
      x="0px"
      y="0px"
      fill={"red"}
      width={14}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M4.707 3.293L3.293 4.707 10.586 12l-7.293 7.293 1.414 1.414L12 13.414l7.293 7.293 1.414-1.414L13.414 12l7.293-7.293-1.414-1.414L12 10.586 4.707 3.293z" />
    </Svg>
  );
}

export default RejectIcon;
