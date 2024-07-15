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

const WrapInputComponent = ({ onPress, children, customStyle }: any) => {
  return onPress ? (
    <View>{children}</View>
  ) : (
    <View style={customStyle}>{children}</View>
  );
};

const StyledInput = (props: StyledInputProps, ref: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const input = useRef<TextInput>(null);
  const { t } = useTranslation();

  const { fonts, gutters, backgrounds } = useTheme();

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
    <View
      style={[
        containerStyle,
        gutters.padding_16,
        layout.col,
        gutters.gap_8,
        backgrounds.white,
        gutters.marginTop_16,
        layout.fullWidth,
      ]}
    >
      {!!label && (
        <Text
          // customStyle={[styles.label, customLabelStyle]}
          i18nKey={label}
          style={[fonts.size_16, fonts.blue, fonts.medium]}
        />
      )}
      <WrapInputComponent
        customStyle={[wrapInputStyle, !isFocused && !!errorMessage]}
        onPress={onPress}
      >
        <TextInput
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
          style={[fonts.regular, fonts.size_16, layout.fullWidth]}
          returnKeyType={customReturnKeyType}
          blurOnSubmit={!!customReturnKeyType}
          {...otherProps}
        />
        {/* {!!renderRight && (
          <View style={styles.rightView}>{renderRight?.()}</View>
        )} */}
      </WrapInputComponent>
    </View>
  );
};
// const styles = ScaledSheet.create({
//   textInput: {
//     borderRadius: "10@s",
//     padding: "10@s",
//     backgroundColor: Themes.COLORS.secondary,
//   },
//   errorMessage: {
//     fontSize: "12@ms",
//     color: Themes.COLORS.borderInputError,
//     marginLeft: "5@s",
//   },
//   container: {
//     // marginTop: '15@s',
//   },
//   label: {},
//   rightView: {
//     position: "absolute",
//     right: "10@s",
//     height: "100%",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
export default forwardRef(StyledInput);
