import { View, Image } from "react-native";
import React from "react";
import { Container, SafeScreen } from "@/components/template";
import DashboardImage from "@/theme/assets/images/dashboard.png";
import Button from "@/components/atoms/Button/Button";
import { useAppDispatch } from "@/core/adapters/app-redux/hooks";
import { authActions } from "@/core/adapters/app-redux/slices/authSlice";
import layout from "@/theme/layout";
import { Text } from "@/components/atoms";
import { useTranslation } from "react-i18next";

function HomeScreen() {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(["common"]);

  return (
    <Container containerStyle={{ ...layout.itemsCenter }}>
      <Image source={DashboardImage} />
      <Button
        title="Sign in with email"
        onPress={() =>
          dispatch(
            authActions.loginRequest({
              email: "fake@example.com",
              password: "password1",
            })
          )
        }
      />
      <Text i18nKey={t("appName.full")} />
    </Container>
  );
}

export default HomeScreen;
