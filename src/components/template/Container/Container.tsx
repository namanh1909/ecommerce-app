import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import type { PropsWithChildren } from "react";

import { useTheme } from "@/theme";
import { BackIcon } from "@/components/atoms/Icons/BackIcon";
import { goBack, navigate } from "@/navigators/navigation/NavigationService";

type ContainerProps = PropsWithChildren & {
  containerStyle?: StyleProp<ViewStyle>;
  allowBack?: boolean;
};

function Container({
  children,
  containerStyle,
  allowBack = false,
}: ContainerProps) {
  const { layout, navigationTheme } = useTheme();

  return (
    <View
      testID="container-id"
      style={[
        layout.flex_1,
        {
          paddingLeft: 12,
          paddingRight: 12,
        },
      ]}
    >
      {allowBack && (
        <TouchableOpacity onPress={goBack}>
          <BackIcon />
        </TouchableOpacity>
      )}
      <View
        style={[
          layout.flex_1,
          layout.fullHeight,
          layout.fullWidth,
          containerStyle,
        ]}
      >
        {children}
      </View>
    </View>
  );
}

export default Container;
