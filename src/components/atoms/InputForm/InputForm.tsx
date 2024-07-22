/* eslint-disable no-unused-expressions */
import React, { forwardRef, FunctionComponent, useState } from "react";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
  UseFormReturn,
  UseFormStateReturn,
} from "react-hook-form";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Input, { StyledInputProps } from "@/components/atoms/Input/Input";
import layout from "@/theme/layout";
import { useTheme } from "@/theme";
import { CloseEyesIcon, EyesIcon } from "../Icons";

type TName = FieldPath<FieldValues>;

export interface IParamsRender {
  field: ControllerRenderProps<FieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<FieldValues>;
}
interface FormInputProps extends StyledInputProps {
  name: string;
  rules?: RegisterOptions;
  defaultValue?: string;
  form?: UseFormReturn;
  InputComponent?: FunctionComponent<any>;
  renderBaseInput?: ({
    field,
    fieldState,
    formState,
  }: IParamsRender) => React.ReactElement;
  dynamicOnChangeName?: string;
}

const StyledInputForm = forwardRef((props: FormInputProps, ref: any) => {
  const { t } = useTranslation();
  const { layout, borders } = useTheme();
  const {
    name,
    rules,
    defaultValue = "",
    onChangeText,
    InputComponent = Input,
    form,
    dynamicOnChangeName = "onChangeText",
    ...inputProps
  } = props;
  const formContext = useFormContext();

  if (!(formContext || form)) {
    return (
      <InputComponent
        errorMessage={"error.inputComponent"}
        {...inputProps}
        editable={false}
      />
    );
  }

  const { control } = formContext || form;
  const customInputProps = inputProps;

  const onChangeInput = (text: string, onChangeControl: any) => {
    onChangeText ? onChangeText(text) : onChangeControl(text);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const RenderRight = () => {
    return (
      <>
        {props?.secureTextEntry &&
          (name.includes("password") || name.includes("confirmPassword")) && (
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {isPasswordVisible ? <EyesIcon /> : <CloseEyesIcon />}
            </TouchableOpacity>
          )}
      </>
    );
  };

  const renderBaseInput = ({
    field: { onChange, value },
    fieldState: { error },
  }: IParamsRender) => {
    return (
      <>
        <View
          style={[
            {
              // paddingRight: 10,
            },
          ]}
        >
          <InputComponent
            wrapInputStyle={[
              layout.row,
              borders.rounded_10,
              layout.itemsCenter,
              layout.justifyCenter,
            ]}
            ref={ref}
            value={value}
            autoFocus={false}
            {...{
              [dynamicOnChangeName]: (text: string) =>
                onChangeInput(text, onChange),
            }}
            {...customInputProps}
            secureTextEntry={props?.secureTextEntry && isPasswordVisible}
            renderRight={props?.secureTextEntry && RenderRight}
          />
        </View>
        {!!error && <Text style={styles.errorMessage}>{error?.message}</Text>}
      </>
    );
  };

  return (
    <Controller
      control={control}
      name={name as any}
      defaultValue={defaultValue}
      rules={rules}
      render={props?.renderBaseInput || renderBaseInput}
    />
  );
});

export default StyledInputForm;

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 12,
    // color: Themes.COLORS.borderInputError,
    marginLeft: 5,
    // fontFamily: Fonts.regular,
  },
});
