import React from "react";
import { Container, SafeScreen } from "@/components/template";
import StyledInputForm from "@/components/atoms/InputForm/InputForm";
import { useTheme } from "@/theme";
import { Button, OverlayLoading, Text } from "@/components/atoms";
import { FormProvider } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { useAuth } from "@/hooks";
import { Text as TextBase } from "react-native";

function SignInScreen() {
  const { form, onSubmit, isProcessing, t } = useAuth({ isSignInState: true });
  const { components, layout, gutters, fonts } = useTheme();

  return (
    <SafeScreen>
      <Container allowBack containerStyle={[layout.justifyBetween]}>
        <View>
          <Text
            style={[components.title, fonts.alignCenter]}
            i18nKey={t("login.Welcome")}
          />
          <Text
            style={[components.label, fonts.alignCenter]}
            i18nKey={t("login.required")}
          />
        </View>

        <View style={[gutters.gap_16]}>
          <FormProvider {...form}>
            <StyledInputForm
              label={t("login.email")}
              name="name"
              customPlaceHolder={t("placeholder.name")}
            />
            <StyledInputForm
              label={t("label.password")}
              name="password"
              customPlaceHolder={t("placeholder.password")}
              secureTextEntry
            />
            <TouchableOpacity>
              <Text
                i18nKey={t("login.forgotPassword")}
                style={[layout.itemsEnd, fonts.alignRight]}
              />
            </TouchableOpacity>
          </FormProvider>
        </View>

        <View style={[gutters.gap_16]}>
          <View style={[layout.row, gutters.paddingHorizontal_24]}>
            <TextBase>
              <Text style={[components.des]} i18nKey={t("login.temp")} />
              <TextBase> </TextBase>
              <Text
                onPress={() => console.log("123")}
                style={[fonts.size_12, gutters.paddingLeft_4]}
                i18nKey={t("login.conditions")}
              />
            </TextBase>
          </View>
          <Button title={t("header.signIn")} onPress={onSubmit} />
        </View>
      </Container>
    </SafeScreen>
  );
}

export default SignInScreen;
