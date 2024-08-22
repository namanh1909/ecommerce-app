import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
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
import { AccessToken, LoginButton } from "react-native-fbsdk-next";

function LadingScreen() {
  const { t } = useTranslation(["auth"]);
  const { gutters, fonts, components } = useTheme();

  const navigateToSignIn = () => navigate(AUTHENTICATE_ROUTE.LOGIN);
  const navigateToSignUp = () => navigate(AUTHENTICATE_ROUTE.REGISTER);

  return (
    <SafeScreen>
      <Container
        allowBack
        containerStyle={[
          layout.flex_1,
          layout.justifyBetween,
          layout.itemsCenter,
        ]}
      >
        <View>
          <Text style={[components.title]} i18nKey={"landing.start"} />
        </View>
        <View style={[layout.fullWidth, gutters.gap_4]}>
          <SocialMediasButton type="facebook" />
          <SocialMediasButton type="twitter" />
          <SocialMediasButton type="google" />
        </View>
        <View style={[layout.fullWidth, gutters.gap_12, layout.itemsCenter]}>
          <View style={[layout.row, gutters.gap_4]}>
            <Text style={[components.label]} i18nKey={"landing.Already"} />
            <TouchableOpacity onPress={navigateToSignUp}>
              <Text i18nKey={"header.signIn"} />
            </TouchableOpacity>
          </View>
          <Button title="landing.Create" onPress={navigateToSignIn} />
        </View>
      </Container>
    </SafeScreen>
  );
}

export default LadingScreen;
