import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useWeather } from "../../context/weather-context";
import { ConditionText, weatherImages } from "../../constants";

const LocationDetails = () => {
  const { weatherData } = useWeather();
  const [choosenLocation, setChoosenLocation] = useState<any>(null);

  const conditionText = choosenLocation?.current.condition
    .text as ConditionText;
  const selectedImage = weatherImages.hasOwnProperty(conditionText)
    ? weatherImages[conditionText]
    : weatherImages["other"];

  useEffect(() => {
    if (weatherData) {
      setChoosenLocation(weatherData);
    }
  }, [weatherData]);

  return (
    <View className="mx-4 justify-around flex-1 mb-2">
      {/* location details */}
      <Text className="text-white text-center text-2xl font-bold">
        {choosenLocation?.location.name},{" "}
        <Text className="text-lg font-semibold text-gray-300">
          {choosenLocation?.location.country}
        </Text>
      </Text>
      {/* Weather image */}
      <View className="flex-row justify-center">
        <Image source={selectedImage} className="w-52 h-52" />
      </View>
      {/* Degree celcius */}
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">
          {choosenLocation?.current.temp_c}&#176;
        </Text>
        <Text className="text-center text-white text-xl tracking-widest">
          {choosenLocation?.current.condition.text}
        </Text>
      </View>
      {/* other status */}
      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../../assets/icons/wind.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">
            {choosenLocation?.current.wind_kph}km
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../../assets/icons/drop.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">
            {choosenLocation?.current.humidity}%
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../../assets/icons/sun.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">
            {choosenLocation?.forecast.forecastday[0].astro.sunrise}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LocationDetails;
