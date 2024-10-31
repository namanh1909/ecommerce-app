import { StyleSheet, Text, TextInput, View, ViewStyle } from "react-native";
import React from "react";
import { SearchIcon, VoiceIcon } from "@/components/atoms";
import { useTheme } from "@/theme";

type Props = {
  allowVoice?: boolean;
  containerStyle?: ViewStyle;
};

const SearchInput = (props: Props) => {
  const { layout, gutters, borders, backgrounds } = useTheme();
  const { allowVoice, containerStyle } = props;
  return (
    <View
      style={[layout.row, layout.fullWidth, gutters.gap_12, containerStyle]}
    >
      <View
        style={[
          layout.row,
          layout.itemsCenter,
          gutters.gap_12,
          gutters.padding_12,
          borders.rounded_10,
          layout.flex_1,
          { backgroundColor: "#F5F6FA" },
        ]}
      >
        <SearchIcon />
        <TextInput
          placeholder="Search ..."
          style={{ flex: 1 }}
          numberOfLines={1}
          maxLength={60}
        />
      </View>
      {allowVoice && (
        <View
          style={[
            backgrounds.primary,
            gutters.padding_12,
            borders.rounded_10,
            { width: 50, height: 50 },
          ]}
        >
          <VoiceIcon />
        </View>
      )}
    </View>
  );
};

export default SearchInput;
