import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { useTheme } from "@/theme";
// import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  type: "facebook" | "google" | "twitter";
  style?: StyleProp<ViewStyle>;
};

const SocialMediasButton = (props: Props) => {
  const { title, onPress, type, style } = props;
  const { layout, gutters, backgrounds, fonts, borders, components } =
    useTheme();

  const getBackgroundColor = () => {
    switch (type) {
      case "facebook":
        return backgrounds.facebook;
      case "google":
        return backgrounds.google;
      case "twitter":
        return backgrounds.twitter;
      default:
        return backgrounds.blue;
    }
  };

  const getIconName = () => {
    switch (type) {
      case "facebook":
        return "logo-facebook";
      case "google":
        return "logo-google";
      case "twitter":
        return "logo-twitter";
      default:
        return "logo-social";
    }
  };

  return (
    <TouchableOpacity
      style={[
        layout.fullWidth,
        gutters.paddingVertical_24,
        getBackgroundColor(),
        layout.itemsCenter,
        borders.rounded_4,
        layout.itemsCenter,
        style,
      ]}
      onPress={onPress}
    >
      {/* <Icon
        name={getIconName() as any}
        size={20}
        color={fonts.white.color}
        style={gutters.marginRight_8}
      /> */}
    </TouchableOpacity>
  );
};

export default SocialMediasButton;
