import React, { forwardRef, FunctionComponent, useState } from "react";
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

export interface IParamsRender {
  field: {
    onChange: (text: string) => void;
    value: string;
  };
  fieldState: {
    error?: {
      message: string;
    };
  };
}
interface FormInputProps extends StyledInputProps {
  name?: string;
  rules?: any;
  defaultValue?: string;
  InputComponent?: FunctionComponent<any>;
  renderBaseInput?: ({
    field,
    fieldState,
  }: IParamsRender) => React.ReactElement;
  dynamicOnChangeName?: string;
  loading?: boolean;
  disabled?: boolean;
  errorMessage?: string;
}

const InputForm = forwardRef((props: FormInputProps, ref: any) => {
  const { t } = useTranslation();
  const { layout, borders, fonts } = useTheme();
  const {
    name,
    defaultValue = "",
    onChangeText,
    InputComponent = Input,
    dynamicOnChangeName = "onChangeText",
    loading = false,
    disabled = false,
    errorMessage = "",
    ...inputProps
  } = props;

  const [value, setValue] = useState(defaultValue);
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const onChangeInput = (text: string) => {
    setValue(text);
    onChangeText && onChangeText(text);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  function RenderRight() {
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

  const renderBaseInput = () => {
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
            [dynamicOnChangeName]: onChangeInput,
          }}
          {...inputProps}
          secureTextEntry={props?.secureTextEntry && isPasswordVisible}
          renderRight={RenderRight}
          editable={!disabled}
        />
        {!!errorMessage && (
          <Text style={[fonts.red500, fonts.size_12]}>{errorMessage}</Text>
        )}
      </>
    );
  };

  return renderBaseInput();
});

export default InputForm;
