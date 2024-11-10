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
import { useAuthState } from "@/core/adapters/app-redux/hooks/useAuthState";

function ActivationAccountScreen() {
  const { components, layout, gutters, fonts } = useTheme();
  const { t } = useTranslation("auth");
  const {
    errorOTP,
    isProcessing,
    onBackPress,
    navigateToOTP,
    onSubmitOTP,
    handleOTPChange,
  } = useAuthState();
  return (
    <SafeScreen>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Container
          onBackPress={onBackPress}
          allowBack
          containerStyle={[layout.justifyBetween, layout.itemsCenter]}
        >
          <Text
            style={[components.title, fonts.alignCenter]}
            i18nKey={t("header.verify")}
          />
          <LogoAppIcon />
          <View style={[gutters.gap_16]}>
            <StyledInputForm
              label={t("label.otp")}
              customPlaceHolder={t("placeholder.OTP")}
              disabled={false}
              onChangeText={handleOTPChange}
              errorMessage={errorOTP}
              keyboardType="number-pad"
              maxLength={6}
            />
          </View>

          <View style={[layout.row, layout.justifyBetween]}>
            <Button
              title={t("header.confirm")}
              onPress={onSubmitOTP}
              loading={isProcessing}
            />
          </View>
        </Container>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
}

export default ActivationAccountScreen;
