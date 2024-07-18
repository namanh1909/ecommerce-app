import React from "react";
import { Container, SafeScreen } from "@/components/template";
import { Header } from "@/components/molecules";
import StyledInputForm from "@/components/atoms/InputForm/InputForm";
import { useTheme } from "@/theme";
import { Button, OverlayLoading, Text } from "@/components/atoms";
import { FormProvider } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { useLoginScreen } from "@/hooks";

const LoginScreen = () => {
  const {
    isSignInState,
    form,
    featureText,
    featureDiffText,
    alreadyHasAccount,
    onChangeFeature,
    onSubmit,
    isProcessing,
    t,
  } = useLoginScreen();
  const { components, layout, gutters } = useTheme();

  return (
    <SafeScreen>
      <OverlayLoading visible={isProcessing} />
      <Header title={featureText} />
      <Container isWapper={false}>
        <View style={[layout.fullWidth, layout.flex_1]}>
          <FormProvider {...form}>
            {!isSignInState && (
              <>
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
              </>
            )}
            <StyledInputForm
              label={t("label.email")}
              name="email"
              customPlaceHolder={t("placeholder.email")}
            />
            <StyledInputForm
              label={t("label.password")}
              name="password"
              customPlaceHolder={t("placeholder.password")}
            />
            <Text
              i18nKey={t("label.forgotPassword")}
              style={[components.textGray, gutters.marginVertical_16]}
            />
          </FormProvider>

          <View style={[layout.row, layout.justifyBetween]}>
            <Button
              title={featureText}
              buttonStyle={[layout.flex_1]}
              onPress={onSubmit} // Ensure the onSubmit function is called correctly
            />
            <View
              style={[
                layout.flex_1,
                layout.justifyCenter,
                gutters.gap_4,
                gutters.marginLeft_12,
              ]}
            >
              <Text style={[components.textGray]} i18nKey={alreadyHasAccount} />
              <TouchableOpacity activeOpacity={0} onPress={onChangeFeature}>
                <Text i18nKey={featureDiffText} style={[components.textBtn]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    </SafeScreen>
  );
};

export default LoginScreen;
