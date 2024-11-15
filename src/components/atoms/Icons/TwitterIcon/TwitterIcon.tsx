import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function TwitterIcon(props: SvgProps) {
  return (
    <Svg width={14} height={12} viewBox="0 0 14 12" fill="none" {...props}>
      <Path
        d="M11.891 3.622v.344c0 3.558-2.715 7.666-7.665 7.666a7.74 7.74 0 01-4.143-1.203c.207.017.43.034.636.034 1.255 0 2.424-.43 3.352-1.152a2.667 2.667 0 01-2.51-1.873 2.498 2.498 0 001.22-.052 2.675 2.675 0 01-2.165-2.63v-.034c.361.207.774.327 1.22.344A2.699 2.699 0 01.633 2.815c0-.499.138-.963.361-1.358a7.666 7.666 0 005.552 2.819 2.44 2.44 0 01-.069-.62A2.692 2.692 0 019.176.959c.773 0 1.478.327 1.959.843a5.476 5.476 0 001.719-.654 2.778 2.778 0 01-1.186 1.496 5.161 5.161 0 001.547-.43 4.924 4.924 0 01-1.324 1.41z"
        fill="#FEFEFE"
      />
    </Svg>
  );
}

export default TwitterIcon;
