import { useTheme } from "@/theme";
import React from "react";
import { View, TouchableOpacity } from "react-native";

function StyledTabBar({ state, descriptors, navigation }: any) {
  const { layout, components } = useTheme();
  return (
    <View style={[components.tabContainer]}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          console.log(route.key);
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.key}
            style={[layout.itemsCenter, layout.justifyCenter]}
          >
            {!isFocused ? options.icon : options.iconForcus}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default StyledTabBar;
