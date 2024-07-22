import { StatusBar, View, ViewStyle } from "react-native";
import type { PropsWithChildren } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/theme";
import { isIos } from "@/utilities/helper";

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
          paddingLeft: 10,
          paddingRight: 10,
        },
        containerStyle,
      ]}
    >
      {children}
    </View>
  );
}

export default Container;
