import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function VoiceIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4.714 10.932a7.403 7.403 0 007.404 7.404 7.403 7.403 0 007.404-7.404M12.119 21.147v-2.81"
        stroke="#FEFEFE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M12.245 14.584h-.253a3.66 3.66 0 01-3.66-3.66v-4.55a3.66 3.66 0 013.66-3.66h.253a3.66 3.66 0 013.66 3.66v4.55a3.66 3.66 0 01-3.66 3.66z"
        stroke="#FEFEFE"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default VoiceIcon;
