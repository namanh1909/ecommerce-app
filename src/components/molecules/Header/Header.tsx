import { useTheme } from "@/theme";
import layout from "@/theme/layout";
import React from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from "react-native";
import { ArrowLeftIcon } from "@/components/atoms/Icons";
import { goBack, navigate } from "@/navigators/navigation/NavigationService";
import { Text } from "@/components/atoms";
import { useTranslation } from "react-i18next";

type HeaderProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  title: string;
  style?: StyleProp<ViewStyle>;
  allowBack?: boolean;
  onGoBack?: Function;
};

const Header: React.FC<HeaderProps> = ({
  left,
  right,
  title,
  style,
  allowBack = true,
  onGoBack,
}) => {
  const { gutters, backgrounds, fonts } = useTheme();
  const onBack = () => {
    onGoBack && onGoBack();
    goBack();
  };

  return (
    <View
      style={[
        layout.row,
        layout.itemsCenter,
        layout.justifyBetween,
        backgrounds.white,
        gutters.paddingVertical_24,
        gutters.paddingHorizontal_16,
      ]}
    >
      <View style={[layout.flex_1]}>
        {allowBack && (
          <TouchableOpacity onPress={onBack}>
            <ArrowLeftIcon />
          </TouchableOpacity>
        )}
        {left}
      </View>
      <Text
        i18nKey={title}
        style={[
          fonts.medium,
          fonts.size_16,
          layout.flex_1,
          layout.itemsCenter,
          fonts.alignCenter,
        ]}
      ></Text>
      <View style={[layout.flex_1, layout.itemsEnd]}>{right}</View>
    </View>
  );
};

export default Header;
