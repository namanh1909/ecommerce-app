import { StyleSheet, View } from "react-native";
import React from "react";
import { SharedValue } from "react-native-reanimated";
import Dot from "@/components/atoms/DotIndicators/DotIndicators";
import { useTheme } from "@/theme";
import { SliderOnboard } from "@/@types/oboarding";

type Props = {
  data: SliderOnboard[];
  x: SharedValue<number>;
};
function Pagination({ data, x }: Props) {
  const { layout, gutters } = useTheme();

  return (
    <View
      style={[
        layout.row,
        gutters.height_40,
        layout.itemsCenter,
        layout.justifyCenter,
      ]}
    >
      {data.map((_, index) => {
        return <Dot index={index} x={x} key={index} />;
      })}
    </View>
  );
}

export default Pagination;
