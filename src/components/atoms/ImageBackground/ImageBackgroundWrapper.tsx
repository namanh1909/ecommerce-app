// ImageBackgroundWrapper.tsx
import layout from "@/theme/layout";
import React, { ReactNode } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  ImageSourcePropType,
} from "react-native";

interface ImageBackgroundWrapperProps {
  source: ImageSourcePropType;
  children: ReactNode;
}

const ImageBackgroundWrapper: React.FC<ImageBackgroundWrapperProps> = ({
  source,
  children,
}) => {
  return (
    <ImageBackground
      source={source}
      style={[
        layout.flex_1,
        layout.fullHeight,
        layout.fullWidth,
        layout.justifyCenter,
        layout.itemsCenter,
      ]}
    >
      <View
        style={[
          layout.flex_1,
          layout.fullWidth,
          layout.fullHeight,
          layout.justifyCenter,
          layout.itemsCenter,
          // { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
      >
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: add an overlay to darken the background image
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageBackgroundWrapper;
