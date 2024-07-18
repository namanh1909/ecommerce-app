import { View, Image } from "react-native";
import React from "react";
import { Container, SafeScreen } from "@/components/template";
import DashboardImage from "@/theme/assets/images/dashboard.png";
import Button from "@/components/atoms/Button/Button";
import { useAppDispatch } from "@/core/adapters/app-redux/hooks";
import { authActions } from "@/core/adapters/app-redux/slices/authSlice";
import layout from "@/theme/layout";
import { OverlayLoading, Text } from "@/components/atoms";
import { useTranslation } from "react-i18next";

function HomeScreen() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(["common"]);

  return (
    <Container>
      <Text style={{ marginBottom: 20 }} i18nKey="home.welcome" />
      <Image source={DashboardImage} />
      <Button title="Logout" onPress={() => dispatch(authActions.logout())} />
      <Text i18nKey={t("appName.full")} />
    </Container>
  );
}

export default HomeScreen;
