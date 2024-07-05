import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeScreen } from "@/components/template";
import layout from "@/theme/layout";
import { Brand } from "@/components/molecules";
import ImageBackground from "@/components/atoms/ImageBackground/ImageBackground";
import SplashBackground from "@/theme/assets/images/splash_background.png";

const SplashScreen = () => {
  return (
    <SafeScreen>
      <ImageBackground source={SplashBackground} />
    </SafeScreen>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
