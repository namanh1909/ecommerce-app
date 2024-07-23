import React from "react";
import { Container, SafeScreen } from "@/components/template";
import { FilterIcon, HeartIcon, IconButton, Text } from "@/components/atoms";
import { useTranslation } from "react-i18next";
import { EventCard, Header } from "@/components/molecules";
import { useTheme } from "@/theme";
import SliderEvent from "@/components/organisms/SliderEvent/SliderEvent";
import { View } from "react-native";

function HomeScreen() {
  const { t } = useTranslation(["home"]);
  const { components, gutters, layout } = useTheme();
  return (
    <SafeScreen>
      <Header
        left={
          <IconButton>
            <HeartIcon />
          </IconButton>
        }
        title={t("home")}
      />
      <Container containerStyle={[layout.row, layout.justifyBetween]}>
        <Text i18nKey={t("homeScreen.eventNear")} style={[components.h2]} />
        <IconButton>
          <FilterIcon />
        </IconButton>
      </Container>
      <SliderEvent />
      <Container>
        <Text i18nKey={t("homeScreen.eventNear")} style={[components.h2]} />
      </Container>
    </SafeScreen>
  );
}

export default HomeScreen;
