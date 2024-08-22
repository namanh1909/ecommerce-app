import React from "react";
import { Container, SafeScreen } from "@/components/template";
import StyledInputForm from "@/components/atoms/InputForm/InputForm";
import { useTheme } from "@/theme";
import { Button, Text } from "@/components/atoms";
import { FormProvider } from "react-hook-form";
import { View } from "react-native";
import { useAuth } from "@/hooks";

function SignUp() {
  const { form, onSubmit, isProcessing, t } = useAuth({ isSignInState: false });
  const { components, layout, gutters, fonts } = useTheme();

  return (
    <SafeScreen>
      <Container allowBack containerStyle={[layout.justifyBetween]}>
        <Text
          style={[components.title, fonts.alignCenter]}
          i18nKey={t("header.signUp")}
        />
        <View style={[gutters.gap_16]}>
          <FormProvider {...form}>
            <StyledInputForm
              label={t("label.name")}
              name="name"
              customPlaceHolder={t("placeholder.name")}
            />
            <StyledInputForm
              label={t("label.phone")}
              name="phone"
              customPlaceHolder={t("placeholder.phone")}
            />
            <StyledInputForm
              label={t("label.email")}
              name="email"
              customPlaceHolder={t("placeholder.email")}
            />
            <StyledInputForm
              label={t("label.password")}
              name="password"
              customPlaceHolder={t("placeholder.password")}
              secureTextEntry
            />
          </FormProvider>
        </View>

        <View style={[layout.row, layout.justifyBetween]}>
          <Button title={t("header.signUp")} onPress={onSubmit} />
        </View>
      </Container>
    </SafeScreen>
  );
}

export default SignUp;
