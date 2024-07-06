import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { useTheme } from "@/theme";
import { ArrowRightIcon } from "@/components/atoms";

type NextStepButtonProps = {
  onPress?: () => void;
};

function NextStepButton(props: NextStepButtonProps) {
  const { layout, gutters, fonts, colors } = useTheme();

  return (
    <TouchableOpacity
      testID="next-step-button"
      style={[
        layout.row,
        layout.justifyCenter,
        layout.itemsCenter,
        gutters.gap_4,
      ]}
      onPress={props.onPress}
    >
      <Text style={[fonts.size_16, fonts.regular, fonts.blue]}>Next</Text>
      <ArrowRightIcon />
    </TouchableOpacity>
  );
}

export default NextStepButton;
