import React from "react";
import SearchBar from "../../components/SearchBar";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import LocationDetails from "../../components/LocationDetails";
import NextDaysForecast from "../../components/NextDaysForecast";
import { useWeather } from "../../context/weather-context";

const HomeScreen = () => {
  const { weatherData, loading } = useWeather();

  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight }}
      className="flex-1 relative"
    >
      <Image
        blurRadius={70}
        source={require("../../../assets/images/bg.png")}
        className="absolute h-[150%] w-full"
      />
      <SafeAreaView className="flex-1">
        <SearchBar />
        {loading ? (
          <View className="flex-1 items-center justify-center">
            <ActivityIndicator size={"large"} />
          </View>
        ) : weatherData ? (
          <>
            <LocationDetails />
            <NextDaysForecast />
          </>
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-white text-3xl font-semibold">
              No place chosen yet
            </Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
