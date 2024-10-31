import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Product } from "@/core/entities";
import { useTheme } from "@/theme";

interface ProductProps {
  product: Product;
}

const ProductCard = ({ product }: ProductProps) => {
  const { layout, gutters, borders, components } = useTheme();
  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={{ width: screenWidth / 2 - 20, paddingVertical: 10, gap: 4 }}>
      <Image
        source={{ uri: product.imageUrl }}
        style={[borders.rounded_10, { height: 200 }]}
      />
      <Text
        ellipsizeMode="tail"
        numberOfLines={1}
        style={[components.products.title]}
      >
        {product.name}
      </Text>
      <Text style={[components.products.brand]}>{product.brand}</Text>
      <Text style={[components.products.price]}>{product.price}$</Text>
    </View>
  );
};

export default ProductCard;
