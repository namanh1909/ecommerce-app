import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BrandCard } from "@/components/molecules";
import { Brand } from "@/core/entities/brand";

type Props = {};

const BrandScrollList = (props: Props) => {
  const brands: Brand[] = []; // Example data array

  return (
    <FlatList
      data={brands}
      renderItem={({ item }: { item: Brand }) => <BrandCard brand={item} />}
    />
  );
};

export default BrandScrollList;

const styles = StyleSheet.create({});
