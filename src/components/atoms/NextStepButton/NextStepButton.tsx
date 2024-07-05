import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ArrowRightIcon from "../Icons/ArrowRigntIcon/ArrowRightIcon";
import layout from "@/theme/layout";
import { useTheme } from "@/theme";

type NextStepButtonProps = {
  onPress?: () => void;
};

const NextStepButton = (props: NextStepButtonProps) => {
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
};

export default NextStepButton;

const styles = StyleSheet.create({});
