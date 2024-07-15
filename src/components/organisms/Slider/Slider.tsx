import { StyleSheet, View, FlatList, ViewToken } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedRef,
} from "react-native-reanimated";
import Slide from "@/components/molecules/Slide/Slide";
import Pagination from "@/components/molecules/Pagination/Pagination";
import { useTheme } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import { OnboardingButton } from "@/components/atoms";

type Props = {
  data: any;
};

function OnboardingScreen(props: Props) {
  const { data } = props;
  const flatListRef = useAnimatedRef<FlatList>();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const { layout, gutters, fonts, colors } = useTheme();
  const navigation = useNavigation();

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0]?.index !== null) {
      flatListIndex.value = viewableItems[0]?.index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const viewabilityConfig = {
    minimumViewTime: 300,
    viewAreaCoveragePercentThreshold: 10,
  };

  return (
    <View style={[layout.flex_1]}>
      <Animated.FlatList
        testID={"onboarding-flatlist"}
        ref={flatListRef}
        onScroll={onScroll}
        data={data}
        renderItem={({ item, index }) => {
          return <Slide item={item} index={index} x={x} />;
        }}
        keyExtractor={(item) => item.id.toString()}
        scrollEventThrottle={16}
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={[
          layout.row,
          layout.justifyBetween,
          layout.itemsCenter,
          gutters.marginHorizontal_32,
          gutters.marginVertical_16,
        ]}
      >
        <Pagination data={data} x={x} />
        <OnboardingButton
          navigation={navigation}
          flatListRef={flatListRef}
          flatListIndex={flatListIndex}
          dataLength={data.length}
          x={x}
        />
      </View>
    </View>
  );
}

export default OnboardingScreen;
