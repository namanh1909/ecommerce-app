// import React, { useState, useEffect } from "react";
// import { View, TouchableOpacity, LayoutAnimation } from "react-native";
// import { FormProvider, useForm } from "react-hook-form";
// import { useTranslation } from "react-i18next";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useTheme } from "@/theme";
// import StyledInputForm from "@/components/molecules/InputForm/InputForm";
// import { Button, Text } from "@/components/atoms";
// import { registerSchema, loginSchema } from "@/utilities/yup/yupSchema";
// import {
//   DEFAULT_FORM_LOGIN,
//   DEFAULT_FORM_REGISTER,
// } from "@/utilities/yup/defaultForm";

// type AuthFormProps = {
//   isSignIn: boolean;
//   callBackSubmit?: (data: any) => void;
// };

// const AuthForm = ({ isSignIn, callBackSubmit }: AuthFormProps) => {
//   const { components, layout, gutters } = useTheme();
//   const { t } = useTranslation("auth");

//   const schema = isSignIn ? loginSchema : registerSchema;
//   const defaultValues = isSignIn ? DEFAULT_FORM_LOGIN : DEFAULT_FORM_REGISTER;

//   const form = useForm({
//     mode: "onChange",
//     defaultValues,
//     resolver: yupResolver(schema),
//   });

//   const {
//     formState: { isValid },
//     handleSubmit,
//     reset,
//   } = form;

//   useEffect(() => {
//     reset(defaultValues);
//   }, [isSignIn, reset, defaultValues]);

//   const onSubmit = handleSubmit(
//     (data) => callBackSubmit && callBackSubmit(data)
//   );

//   return (
//     <FormProvider {...form}>
//       <View style={[layout.fullWidth]}>
//         {!isSignIn && (
//           <>
//             <StyledInputForm
//               label={t("label.name")}
//               name="name"
//               customPlaceHolder={t("placeholder.name")}
//             />
//             <StyledInputForm
//               label={t("label.phone")}
//               name="phone"
//               customPlaceHolder={t("placeholder.phone")}
//             />
//           </>
//         )}
//         <StyledInputForm
//           label={t("label.email")}
//           name="email"
//           customPlaceHolder={t("placeholder.email")}
//         />
//         <StyledInputForm
//           label={t("label.password")}
//           name="password"
//           customPlaceHolder={t("placeholder.password")}
//         />
//         <Text
//           i18nKey={t("label.forgotPassword")}
//           style={[components.textGray, gutters.marginVertical_16]}
//         />
//         <Button
//           title={t("button.submit")}
//           onPress={onSubmit}
//           //   disabled={!isValid}
//         />
//       </View>
//     </FormProvider>
//   );
// };

// export default AuthForm;
