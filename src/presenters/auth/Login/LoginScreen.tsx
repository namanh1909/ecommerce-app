import { TouchableOpacity, View, LayoutAnimation } from "react-native";
import React, { useState } from "react";
import { Container, SafeScreen } from "@/components/template";
import { Header } from "@/components/molecules";
import StyledInputForm from "@/components/atoms/InputForm/InputForm";
import { useTheme } from "@/theme";
import { Button, Text } from "@/components/atoms";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/utilities/yup/yupSchema";
import { DEFAULT_FORM_REGISTER } from "@/utilities/yup/defaultForm";

const LoginScreen = () => {
  const [isSignInState, setisSignInState] = useState<boolean>(true);

  const { components, layout, gutters, fonts } = useTheme();
  const { t } = useTranslation("auth");

  const form = useForm({
    mode: "onChange",
    defaultValues: DEFAULT_FORM_REGISTER,
    reValidateMode: "onChange",
    criteriaMode: "firstError",
    resolver: yupResolver(registerSchema),
  });

  const {
    formState: { isValid },
    handleSubmit,
  } = form;

  // console.log("isValid", isValid);

  // let featureText = !isSignIn ? t("header.signIn") : t("header.signUp");
  // let featureDiffText = isSignIn ? t("header.signIn") : t("header.signUp");
  // let alreadyHasAccount = !isSignIn
  //   ? t("label.noHasAccount")
  //   : t("label.hasAccount");

  let featureText = "as";
  let featureDiffText = "as";
  let alreadyHasAccount = "as";

  const onChangeFeature = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setisSignInState((prev) => !prev); // Toggle the state correctly
  };
  // const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <SafeScreen>
      <Header title={featureText} />
      <Container isWapper={false}>
        <FormProvider {...form}>
          <View style={[layout.fullWidth, layout.flex_1]}>
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

            <View style={[layout.row, layout.justifyBetween]}>
              <Button
                title={featureText}
                buttonStyle={[layout.flex_1]}
                // onPress={onSubmit}
              />
              <View
                style={[
                  layout.flex_1,
                  layout.justifyCenter,
                  gutters.gap_4,
                  gutters.marginLeft_12,
                ]}
              >
                <Text
                  style={[components.textGray]}
                  i18nKey={alreadyHasAccount}
                />
                <TouchableOpacity activeOpacity={0} onPress={onChangeFeature}>
                  <Text
                    i18nKey={featureDiffText}
                    style={[components.textBtn]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </FormProvider>
      </Container>
    </SafeScreen>
  );
};

export default LoginScreen;
