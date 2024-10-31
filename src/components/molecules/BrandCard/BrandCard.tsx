import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/theme";
import { Brand } from "@/core/entities/brand";

type Props = {
  brand: Brand;
};

const BrandCard = (props: Props) => {
  const { brand } = props;
  const { layout, gutters, backgrounds, borders, fonts } = useTheme();
  return (
    <View
      style={[
        layout.row,
        layout.itemsCenter,
        gutters.padding_8,
        gutters.gap_10,
        borders.rounded_10,
        { backgroundColor: "#F5F6FA", maxHeight: 40 },
      ]}
    >
      <Image
        source={{ uri: brand.brandImage }}
        style={{ width: 20, height: 20 }}
      />
      <Text style={[fonts.medium]}>{brand.brandName}</Text>
    </View>
  );
};

export default BrandCard;
