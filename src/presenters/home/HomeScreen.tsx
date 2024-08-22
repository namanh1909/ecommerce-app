import React from "react";
import { Container, SafeScreen } from "@/components/template";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme";
import { CartIcon, MenuIcon } from "@/components/atoms";
import { View } from "react-native";
import { BrandCard, SearchInput } from "@/components/molecules";

function HomeScreen() {
  const { t } = useTranslation(["home"]);
  const { components, gutters, layout } = useTheme();
  return (
    <SafeScreen>
      <Container containerStyle={[gutters.gap_10]}>
        <View style={[layout.row, layout.justifyBetween]}>
          <MenuIcon />
          <CartIcon />
        </View>
        <SearchInput />
      </Container>
    </SafeScreen>
  );
}

export default HomeScreen;
