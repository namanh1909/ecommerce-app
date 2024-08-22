import { AutoCompleteType, TextContentType } from "@/utilities/CommonInterface";
import React, { forwardRef, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ColorValue,
  ReturnKeyTypeOptions,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

import { Text } from "@/components/atoms";
import layout from "@/theme/layout";
import { useTheme } from "@/theme";

export interface StyledInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  wrapInputStyle?: StyleProp<ViewStyle>;
  customStyle?: StyleProp<TextStyle>;
  customLabelStyle?: StyleProp<TextStyle>;
  customErrorStyle?: StyleProp<TextStyle>;
  placeholderTextColor?: ColorValue;
  customUnderlineColor?: ColorValue;
  customReturnKeyType?: ReturnKeyTypeOptions;
  ref?: any;
  errorMessage?: string;
  label?: string;
  textContentType?: TextContentType;
  autoCompleteType?: AutoCompleteType;
  renderRight?: any;
  onPress?: any;
  customPlaceHolder: any;
}

function WrapInputComponent({ onPress, children, customStyle }: any) {
  return onPress ? (
    <View>{children}</View>
  ) : (
    <View style={customStyle}>{children}</View>
  );
}

function Input(props: StyledInputProps, ref: any) {
  const [isFocused, setIsFocused] = useState(false);
  const input = useRef<TextInput>(null);
  const { t } = useTranslation();

  const { fonts, gutters, backgrounds, components } = useTheme();

  const {
    containerStyle,
    label,
    customStyle,
    customLabelStyle,
    customReturnKeyType = "next",
    renderRight,
    errorMessage,
    customErrorStyle,
    placeholderTextColor,
    customUnderlineColor = "transparent",
    autoCompleteType = "off",
    textContentType = "none",
    wrapInputStyle,
    onPress,
    customPlaceHolder,
    ...otherProps
  } = props;

  return (
    <View style={[containerStyle, layout.col, layout.fullWidth]}>
      {!!label && (
        <Text
          // customStyle={[styles.label, customLabelStyle]}
          i18nKey={label}
          style={[components.label]}
        />
      )}
      <WrapInputComponent
        customStyle={[wrapInputStyle, !isFocused && !!errorMessage]}
        onPress={onPress}
      >
        <TextInput
          testID="inputTestId"
          ref={ref || input}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          // style={[styles.textInput, customStyle, !isFocused && !!errorMessage]}
          placeholderTextColor={placeholderTextColor}
          placeholder={customPlaceHolder ?? ""}
          underlineColorAndroid={customUnderlineColor}
          // autoCompleteType={autoCompleteType}
          textContentType={textContentType}
          importantForAutofill="yes"
          autoCorrect={false}
          style={[
            fonts.regular,
            fonts.size_14,
            fonts.medium,
            layout.fullWidth,
            {
              borderBottomWidth: 1,
              paddingVertical: 10,
              borderColor: "#E7E8EA",
            },
          ]}
          returnKeyType={customReturnKeyType}
          blurOnSubmit={!!customReturnKeyType}
          {...otherProps}
        />
        {renderRight && (
          <View style={[layout.absolute, { right: 5 }]}>{renderRight()}</View>
        )}
      </WrapInputComponent>
    </View>
  );
}

export default forwardRef(Input);
