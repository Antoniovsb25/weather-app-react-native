import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DailyForecastCard from "./components/DailyForecastCard";

const NextDaysForecast = () => {
  return (
    <View className="mb-2 space-y-3">
      <View className="flex-row items-center mx-5 space-x-2">
        <Ionicons name="calendar-outline" size={22} color={"white"} />
        <Text className="text-white text-base">Daily Forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        <DailyForecastCard />
        <DailyForecastCard />
        <DailyForecastCard />
        <DailyForecastCard />
      </ScrollView>
    </View>
  );
};

export default NextDaysForecast;
