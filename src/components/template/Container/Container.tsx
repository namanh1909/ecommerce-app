import { StatusBar, View, ViewStyle } from "react-native";
import type { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/theme";

type ContainerProps = PropsWithChildren & {
  containerStyle?: ViewStyle;
  isWapper?: boolean;
};

function Container({
  children,
  containerStyle,
  isWapper = true,
}: ContainerProps) {
  const { layout, variant, navigationTheme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        layout.flex_1,
        {
          backgroundColor: navigationTheme.colors.background,
          paddingTop: isWapper ? insets.top : 0,
          paddingBottom: isWapper ? insets.bottom : 0,
          paddingLeft: 10,
          paddingRight: 10,
        },
        containerStyle,
      ]}
    >
      <StatusBar
        barStyle={variant === "dark" ? "light-content" : "dark-content"}
        backgroundColor={navigationTheme.colors.background}
      />
      {children}
    </View>
  );
}

export default Container;
