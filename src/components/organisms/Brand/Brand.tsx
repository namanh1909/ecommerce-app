import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/theme";
import { BrandScrollList } from "@/components/molecules/BrandScrollList";
import { HeaderWithViewAll } from "@/components/molecules/HeaderWithViewAll";

const Brand = () => {
  const { gutters, layout, components } = useTheme();
  return (
    <>
      <HeaderWithViewAll title="Choose Brand" />
      <BrandScrollList />
    </>
  );
};

export default Brand;

const styles = StyleSheet.create({});
