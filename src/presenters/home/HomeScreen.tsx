import React from "react";
import { Container, SafeScreen } from "@/components/template";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme";
import { CartIcon, MenuIcon } from "@/components/atoms";
import { View } from "react-native";
import { BrandCard, SearchInput } from "@/components/molecules";
import { Arraival, Brand } from "@/components/organisms";
import HeaderPage from "./components/HeaderPage";

function HomeScreen() {
  const { t } = useTranslation(["home"]);
  const { components, gutters, layout } = useTheme();
  return (
    <SafeScreen>
      <Container>
        <HeaderPage />
        <SearchInput allowVoice containerStyle={gutters.marginTop_10} />
        <Brand />
        <Arraival />
      </Container>
    </SafeScreen>
  );
}

export default HomeScreen;
