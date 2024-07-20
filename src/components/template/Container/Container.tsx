import { StatusBar, View, ViewStyle } from "react-native";
import type { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/theme";

type ContainerProps = PropsWithChildren & {
  containerStyle?: ViewStyle;
};

function Container({ children, containerStyle }: ContainerProps) {
  const { layout, variant, navigationTheme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        layout.flex_1,
        {
          backgroundColor: navigationTheme.colors.background,
          padding: 10,
          paddingBottom: 10,
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
