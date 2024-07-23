import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = {
  fillProps?: string;
} & SvgProps;

function HomeIcon(props: Props) {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9 7.975l-7.837-6.944a3.091 3.091 0 00-4.091 0L1.1 7.975A3.147 3.147 0 00.07 10.313v9.04a4.46 4.46 0 004.469 4.469h12.925a4.46 4.46 0 004.468-4.469v-9.075c0-.894-.378-1.719-1.03-2.303zM9.006 21.725v-3.919c0-1.1.894-1.994 1.994-1.994s1.994.894 1.994 1.994v3.919H9.006zm8.457 0a2.391 2.391 0 002.406-2.406v-9.075c0-.275-.138-.55-.344-.756l-7.837-6.91a1.046 1.046 0 00-1.376 0L2.476 9.522a.985.985 0 00-.344.756v9.04a2.391 2.391 0 002.407 2.407h2.406v-3.919A4.064 4.064 0 0111 13.75a4.064 4.064 0 014.056 4.056v3.919h2.407z"
        fill={props.fillProps}
      />
    </Svg>
  );
}

export default HomeIcon;
