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
        { backgroundColor: "#F5F6FA", minWidth: 90, maxWidth: 110 },
      ]}
    >
      <View style={[layout.row, gutters.padding_4, backgrounds.white]}>
        <Image
          source={{ uri: brand.brandImage }}
          style={{ width: 20, height: 20 }}
        />
      </View>
      <Text style={[fonts.medium]}>{brand.brandName}</Text>
    </View>
  );
};

export default BrandCard;
