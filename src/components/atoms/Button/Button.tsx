import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from "react-native";
import React from "react";
import layout from "@/theme/layout";
import { useTheme } from "@/theme";
import Text from "../Text/Text";

type Props = {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
};

function Button(props: Props) {
  const { title, onPress, buttonStyle, textStyle, loading = false } = props;
  const { layout, gutters, backgrounds, fonts, borders, components } =
    useTheme();
  return (
    <TouchableOpacity
      testID="button-test"
      style={[
        layout.fullWidth,
        gutters.paddingVertical_24,
        backgrounds.primary,
        layout.itemsCenter,
        borders.rounded_4,
        buttonStyle,
      ]}
      onPress={onPress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={fonts.white.color} />
      ) : (
        <Text
          i18nKey={title}
          style={[fonts.medium, fonts.white, textStyle, fonts.size_16]}
        />
      )}
    </TouchableOpacity>
  );
}

export default Button;
