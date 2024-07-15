import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { Container, SafeScreen } from "@/components/template";
import DashboardImage from "@/theme/assets/images/dashboard.png";
import Button from "@/components/atoms/Button/Button";
import { useAppDispatch } from "@/core/adapters/app-redux/hooks";
import layout from "@/theme/layout";
import { SocialMediasButton, Text } from "@/components/atoms";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/theme";
import { navigate } from "@/navigators/navigation/NavigationService";
import { AUTHENTICATE_ROUTE } from "@/navigators/navigation/config/routes";

function LadingScreen() {
  const { t } = useTranslation(["auth"]);
  const { gutters, fonts } = useTheme();

  const navigateToLogin = () => navigate(AUTHENTICATE_ROUTE.LOGIN);

  return (
    <Container
      containerStyle={StyleSheet.flatten([
        layout.itemsCenter,
        layout.flex_1,
        layout.itemsCenter,
      ])}
    >
      <Image
        source={DashboardImage}
        style={[
          layout.justifyBetween,
          layout.itemsCenter,
          gutters.marginTop_120,
        ]}
      />
      <View style={[layout.flex_1, layout.fullWidth, layout.justifyEnd]}>
        <Button title="Sign in with email" onPress={navigateToLogin} />
      </View>

      <Text
        i18nKey={t("landing.socialLogin")}
        style={[gutters.marginVertical_16, fonts.medium]}
      />
      <View style={[layout.row, layout.justifyBetween, gutters.gap_12]}>
        <SocialMediasButton
          title="ion-social-facebook"
          type="facebook"
          style={[layout.flex_1]}
        />
        <SocialMediasButton
          title="Google"
          type="google"
          style={[layout.flex_1]}
        />
        <SocialMediasButton
          title="Twitter"
          type="twitter"
          style={[layout.flex_1]}
        />
      </View>
    </Container>
  );
}

export default LadingScreen;