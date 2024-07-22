import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function TwitterIcon(props: SvgProps) {
  return (
    <Svg width={23} height={30} viewBox="0 0 23 19" fill="none" {...props}>
      <Path
        d="M20.636 4.737c.014.208.014.415.014.623 0 6.336-4.743 13.636-13.411 13.636-2.671 0-5.152-.786-7.239-2.151.38.044.744.06 1.138.06a9.342 9.342 0 005.852-2.049c-2.072-.044-3.809-1.424-4.407-3.323.292.044.584.074.89.074.424 0 .847-.06 1.24-.163C2.554 10.999.935 9.07.935 6.74v-.06a4.689 4.689 0 002.13.61 4.81 4.81 0 01-2.1-3.992c0-.89.233-1.707.641-2.419a13.327 13.327 0 009.72 5.015 5.501 5.501 0 01-.117-1.098c0-2.64 2.102-4.792 4.714-4.792 1.357 0 2.583.578 3.444 1.513A9.188 9.188 0 0022.358.36 4.766 4.766 0 0120.285 3 9.327 9.327 0 0023 2.259a10.227 10.227 0 01-2.364 2.478z"
        fill="#fff"
      />
    </Svg>
  );
}

export default TwitterIcon;