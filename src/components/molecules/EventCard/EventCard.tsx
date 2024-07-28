import { ImageBackground, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@/theme";

type Props = {
  uri: string;
  name: string;
  color: string;
  time: string;
};

function EventCard(props: Props) {
  const { uri, name, color, time } = props;
  const { components, layout, gutters, borders, fonts } = useTheme();
  return (
    <View style={[layout.width_300, layout.height_150, gutters.marginRight_12]}>
      <ImageBackground
        source={{ uri }}
        style={[
          layout.width_300,
          layout.height_150,
          layout.overflow_hidden,
          gutters.marginLeft_10,
          borders.rounded_6,
        ]}
      >
        <View
          style={[
            layout.width_300,
            layout.height_150,
            layout.absolute,
            { opacity: 0.8, backgroundColor: color },
          ]}
        />
      </ImageBackground>
      <View style={[layout.absolute, { left: 20, top: 100 }]}>
        <Text style={[fonts.white]}>{time}</Text>
        <Text style={[fonts.white]}>{name}</Text>
      </View>
    </View>
  );
}

export default EventCard;
