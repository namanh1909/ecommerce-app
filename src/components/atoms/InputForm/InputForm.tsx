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
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
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
  loading?: boolean;
  disabled?: boolean;
}

const InputForm = forwardRef((props: FormInputProps, ref: any) => {
  const { t } = useTranslation();
  const { layout, borders, fonts } = useTheme();
  const {
    name,
    rules,
    defaultValue = "",
    onChangeText,
    InputComponent = Input,
    form,
    dynamicOnChangeName = "onChangeText",
    loading = false,
    disabled = false,
    ...inputProps
  } = props;
  const formContext = useFormContext();

  if (!(formContext || form)) {
    return (
      <InputComponent
        errorMessage="error.inputComponent"
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

  function RenderRight() {
    const { getFieldState } = formContext || form;
    const fieldState = getFieldState(name);

    if (loading) {
      return <ActivityIndicator size="small" />;
    }

    if (props.secureTextEntry) {
      return (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          disabled={disabled}
        >
          {isPasswordVisible ? <CloseEyesIcon /> : <EyesIcon />}
        </TouchableOpacity>
      );
    }

    return null;
  }

  const renderBaseInput = ({
    field: { onChange, value },
    fieldState: { error },
  }: IParamsRender) => {
    return (
      <>
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
          renderRight={RenderRight}
          editable={!disabled}
        />
        {!!error && (
          <Text style={[fonts.red500, fonts.size_12]}>{error?.message}</Text>
        )}
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

export default InputForm;
