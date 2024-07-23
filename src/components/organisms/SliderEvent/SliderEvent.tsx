import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { EventCard } from "@/components/molecules";
import layout from "@/theme/layout";

const data = [
  {
    id: 1,
    uri: "https://4.bp.blogspot.com/-JnMDJhpAXag/UkQIJkqx_nI/AAAAAAAAAis/MtEWPPHMJIU/s1600/anh-dep-hinh-nen-thien-nhien-12.jpg",
    name: "Ecvent 01232",
    time: "Jun 9 2024",
    color: "#956adf",
  },
  {
    id: 2,
    uri: "https://4.bp.blogspot.com/-JnMDJhpAXag/UkQIJkqx_nI/AAAAAAAAAis/MtEWPPHMJIU/s1600/anh-dep-hinh-nen-thien-nhien-12.jpg",
    name: "Ecvent 01232",
    time: "Jun 9 2024",
    color: "#956adf",
  },
  {
    id: 3,
    uri: "https://4.bp.blogspot.com/-JnMDJhpAXag/UkQIJkqx_nI/AAAAAAAAAis/MtEWPPHMJIU/s1600/anh-dep-hinh-nen-thien-nhien-12.jpg",
    name: "Ecvent 01232",
    time: "Jun 9 2024",
    color: "#956adf",
  },
  {
    id: 4,
    uri: "https://4.bp.blogspot.com/-JnMDJhpAXag/UkQIJkqx_nI/AAAAAAAAAis/MtEWPPHMJIU/s1600/anh-dep-hinh-nen-thien-nhien-12.jpg",
    name: "Ecvent 01232",
    time: "Jun 9 2024",
    color: "#956adf",
  },
  {
    id: 5,
    uri: "https://4.bp.blogspot.com/-JnMDJhpAXag/UkQIJkqx_nI/AAAAAAAAAis/MtEWPPHMJIU/s1600/anh-dep-hinh-nen-thien-nhien-12.jpg",
    name: "Ecvent 01232",
    time: "Jun 9 2024",
    color: "#956adf",
  },
  {
    id: 6,
    uri: "https://4.bp.blogspot.com/-JnMDJhpAXag/UkQIJkqx_nI/AAAAAAAAAis/MtEWPPHMJIU/s1600/anh-dep-hinh-nen-thien-nhien-12.jpg",
    name: "Ecvent 01232",
    time: "Jun 9 2024",
    color: "#956adf",
  },
];

const SliderEvent = () => {
  return (
    <FlatList
      horizontal
      keyExtractor={(item) => item.id.toString()}
      data={data}
      scrollEnabled
      renderItem={({ item }) => <EventCard {...item} />}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={{ height: 150, flexGrow: 0 }}
    />
  );
};

export default SliderEvent;
