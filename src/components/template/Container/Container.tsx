import { StyleProp, View, ViewStyle } from "react-native";
import type { PropsWithChildren } from "react";

import { useTheme } from "@/theme";

type ContainerProps = PropsWithChildren & {
  containerStyle?: StyleProp<ViewStyle>;
};

function Container({ children, containerStyle }: ContainerProps) {
  const { layout, navigationTheme } = useTheme();

  return (
    <View
      testID="container-id"
      style={[
        {
          backgroundColor: navigationTheme.colors.background,
          paddingLeft: 12,
          paddingRight: 12,
          paddingBottom: 12,
          paddingTop: 12,
        },
        containerStyle,
      ]}
    >
      {children}
    </View>
  );
}

export default Container;
