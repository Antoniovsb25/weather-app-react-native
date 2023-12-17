import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DailyForecastCard from "./components/DailyForecastCard";
import { useWeather } from "../../context/weather-context";

const NextDaysForecast = () => {
  const { weatherData } = useWeather();
  return (
    <View className="mb-2 space-y-3">
      <View className="flex-row items-center m-4 space-x-2">
        <Ionicons name="calendar-outline" size={22} color={"white"} />
        <Text className="text-white text-base">Daily Forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {weatherData &&
          weatherData.forecast.forecastday.map((day: any, index: number) => (
            <View key={index}>
              <DailyForecastCard date={day.date} {...day.day} />
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default NextDaysForecast;
