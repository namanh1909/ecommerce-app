import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { ProductCard } from "@/components/molecules";
import { useTheme } from "@/theme";

const ArraivalList = () => {
  const { gutters, layout } = useTheme();
  const fakeProductData = [
    {
      id: "1",
      imageUrl: "https://via.placeholder.com/150",
      name: "Sample Product 1",
      brand: "Sample Brand",
      price: 99.99,
    },
    {
      id: "2",
      imageUrl: "https://via.placeholder.com/150",
      name: "Sample Product 2",
      brand: "Sample Brand",
      price: 89.99,
    },
    {
      id: "1",
      imageUrl: "https://via.placeholder.com/150",
      name: "Sample Product 1",
      brand: "Sample Brand",
      price: 99.99,
    },
    {
      id: "3",
      imageUrl: "https://via.placeholder.com/150",
      name: "Sample Product 2",
      brand: "Sample Brand",
      price: 89.99,
    },
    {
      id: "4",
      imageUrl: "https://via.placeholder.com/150",
      name: "Sample Product 1",
      brand: "Sample Brand",
      price: 99.99,
    },
    {
      id: "6",
      imageUrl: "https://via.placeholder.com/150",
      name: "Sample Product 2",
      brand: "Sample Brand",
      price: 89.99,
    },
    // Add more products as needed
  ];

  return (
    <FlatList
      data={fakeProductData}
      renderItem={({ item }) => <ProductCard product={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

export default ArraivalList;

const styles = StyleSheet.create({});
