import React from "react";
import { useTheme } from "@/theme";
import { HeaderWithViewAll } from "@/components/molecules/HeaderWithViewAll";
import { ArraivalList, ProductCard } from "@/components/molecules";
import { View } from "react-native";

const Arraival = () => {
  const { gutters, layout, components } = useTheme();
  const fakeProductData = {
    imageUrl: "https://via.placeholder.com/150",
    name: "Sample Product 1231231asdasdasda asd asdasdasdasd",
    brand: "Sample Brand",
    price: 99.99,
  };
  return (
    <View>
      <HeaderWithViewAll title="Choose Arraival" />
      <ArraivalList />
    </View>
  );
};

export default Arraival;
