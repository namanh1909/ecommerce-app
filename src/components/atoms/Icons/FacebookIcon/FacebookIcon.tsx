import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function FacebookIcon(props: SvgProps) {
  return (
    <Svg width={23} height={27} viewBox="0 0 26 27" fill="none" {...props}>
      <Path d="M0 0h25.884v26.159H0V0z" fill="#fff" fillOpacity={1} />
      <Path
        clipRule="evenodd"
        d="M2.217 25.069a1.148 1.148 0 01-1.139-1.157V2.247c0-.64.51-1.157 1.139-1.157h21.45c.629 0 1.139.518 1.139 1.157v21.665c0 .639-.51 1.157-1.139 1.157H2.217z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.848 9.748h-2.625c-.728 0-1.318.596-1.318 1.332v2.665h3.943l-.577 3.995h-3.366v7.329h-4.337V17.74h-3.58v-3.995h3.534l.046-3.792-.013-1.36c-.018-1.918 1.507-3.49 3.406-3.508H20.848v4.663z"
        fill="#3B5998"
      />
    </Svg>
  );
}

export default FacebookIcon;
