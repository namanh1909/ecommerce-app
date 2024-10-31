import React from "react";
import { Container, SafeScreen } from "@/components/template";
import StyledInputForm from "@/components/atoms/InputForm/InputForm";
import { useTheme } from "@/theme";
import { Button, LogoAppIcon, Text } from "@/components/atoms";
import { FormProvider } from "react-hook-form";
import { View } from "react-native";
import { useAuth } from "@/hooks";

function SignUp() {
  const { form, onSubmit, isProcessing, t } = useAuth({ isSignInState: false });
  const { components, layout, gutters, fonts } = useTheme();

  return (
    <SafeScreen>
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
          <FormProvider {...form}>
            <StyledInputForm
              label={t("label.email")}
              name="email"
              customPlaceHolder={t("placeholder.email")}
              loading={isProcessing}
              disabled={false}
            />
          </FormProvider>
        </View>

        <View style={[layout.row, layout.justifyBetween]}>
          <Button
            title={t("header.confirm")}
            onPress={onSubmit}
            loading={isProcessing}
          />
        </View>
      </Container>
    </SafeScreen>
  );
}

export default SignUp;
