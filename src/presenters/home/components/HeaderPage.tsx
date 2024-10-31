import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CartIcon, MenuIcon } from "@/components/atoms";
import { useTheme } from "@/theme";

const HeaderPage = () => {
  const { components, gutters, layout } = useTheme();

  return (
    <View style={[layout.row, layout.justifyBetween]}>
      <MenuIcon />
      <CartIcon />
    </View>
  );
};

export default HeaderPage;
