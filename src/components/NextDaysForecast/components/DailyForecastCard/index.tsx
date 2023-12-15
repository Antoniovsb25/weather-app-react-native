import React from "react";
import { View, Text, Image } from "react-native";

const DailyForecastCard = () => {
  return (
    <View className="justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20">
      <Image
        source={require("../../../../../assets/images/heavyrain.png")}
        className="h-11 w-11"
      />
      <Text className="text-white">Monday</Text>
      <Text className="text-white text-xl font-semibold">23&#176;</Text>
    </View>
  );
};

export default DailyForecastCard;
