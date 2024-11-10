import React from "react";
import { Container, SafeScreen } from "@/components/template";
import StyledInputForm from "@/components/atoms/InputForm/InputForm";
import { useTheme } from "@/theme";
import { Button, LogoAppIcon, Text } from "@/components/atoms";
import { FormProvider } from "react-hook-form";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  authActions,
  AuthSelectors,
} from "@/core/adapters/app-redux/slices/authSlice";

function VerifyAccountScreen() {
  const { components, layout, gutters, fonts } = useTheme();
  const { t } = useTranslation("auth");
  const dispatch = useDispatch();
  const errorEmail = useSelector(AuthSelectors.getErrorEmail);
  const email = useSelector(AuthSelectors.getEmail);
  const isProcessing = useSelector(AuthSelectors.isProcessing);

  const handleEmailChange = (email: string) => {
    dispatch(authActions.validateEmailRequest({ email }));
  };

  const onSubmitEmail = () => {
    dispatch(authActions.submitEmail(email));
  };

  return (
    <SafeScreen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Container
          allowBack
          containerStyle={[layout.justifyBetween, layout.itemsCenter]}
        >
          <Text
            style={[components.title, fonts.alignCenter]}
            i18nKey={t("header.signUp")}
          />
          <LogoAppIcon />
          <View style={[gutters.gap_16]}>
            <StyledInputForm
              name="email"
              label={t("label.email")}
              customPlaceHolder={t("placeholder.email")}
              disabled={false}
              onChangeText={handleEmailChange}
              errorMessage={errorEmail}
            />
          </View>

          <View style={[layout.row, layout.justifyBetween]}>
            <Button
              title={t("button.sendOtp")}
              onPress={onSubmitEmail}
              loading={isProcessing}
            />
          </View>
        </Container>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
}

export default VerifyAccountScreen;
