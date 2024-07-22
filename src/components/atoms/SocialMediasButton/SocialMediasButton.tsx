import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { useTheme } from "@/theme";
import { FacebookIcon } from "../Icons";
import GoogleIcon from "../Icons/GoogleIcon/GoogleIcon";
import Twittericon from "../Icons/TwitterIcon/TwitterIcon";

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
        return <FacebookIcon />;
      case "google":
        return <GoogleIcon />;
      case "twitter":
        return <Twittericon />;
      default:
        return <FacebookIcon />;
    }
  };

  return (
    <TouchableOpacity
      style={[
        layout.fullWidth,
        gutters.paddingVertical_12,
        getBackgroundColor(),
        layout.itemsCenter,
        borders.rounded_4,
        layout.itemsCenter,
        style,
      ]}
      onPress={onPress}
    >
      {getIconName()}
    </TouchableOpacity>
  );
};

export default SocialMediasButton;
