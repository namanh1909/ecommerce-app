import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useTheme } from "@/theme";

type Props = {
  title?: string;
  onAction?: () => void;
};

const HeaderWithViewAll = (props: Props) => {
  const { gutters, layout, components } = useTheme();

  const { title, onAction } = props;

  return (
    <View
      style={[layout.row, layout.justifyBetween, gutters.marginVertical_12]}
    >
      <Text style={[components.title]}>{title}</Text>
      <TouchableOpacity onPress={onAction}>
        <Text style={[components.viewAll]}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderWithViewAll;
