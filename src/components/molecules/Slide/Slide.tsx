import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTheme } from "@/theme";

type Props = {
  index: number;
  x: SharedValue<number>;
  item: any;
};

const Slide = ({ index, x, item }: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const { layout, gutters, fonts, colors } = useTheme();

  const lottieAnimationStyle = useAnimatedStyle(() => {
    const translateYAnimation = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [200, 0, -200],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY: translateYAnimation }],
    };
  });

  const circleAnimation = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [1, 4, 4],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale: scale }],
    };
  });

  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            {
              width: SCREEN_WIDTH,
              height: SCREEN_WIDTH,
              borderRadius: SCREEN_WIDTH / 2,
            },
            circleAnimation,
          ]}
        />
      </View>
      <Animated.View style={[lottieAnimationStyle, layout.itemsCenter]}>
        <Image
          resizeMode="contain"
          source={item.source}
          style={{
            width: SCREEN_WIDTH * 0.9,
            height: SCREEN_WIDTH * 0.9,
          }}
        />
      </Animated.View>
      <View style={[layout.justifyCenter]}>
        <Text style={[fonts.medium, fonts.size_24, fonts.alignCenter]}>
          {item.title}
        </Text>
        <Text
          style={[
            fonts.regular,
            fonts.size_16,
            fonts.alignCenter,
            gutters.marginTop_12,
            fonts.gray200,
          ]}
        >
          {item.subTitle}
        </Text>
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 120,
  },
  itemText: {
    textAlign: "center",
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});