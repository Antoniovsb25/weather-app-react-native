import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useWeather } from "../../context/weather-context";

type ChoosenLocation = {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
};

const LocationDetails = () => {
  const { weatherData } = useWeather();
  const initialLocation: ChoosenLocation = {
    country: "",
    lat: 0,
    localtime: "",
    localtime_epoch: 0,
    lon: 0,
    name: "",
    region: "",
    tz_id: "",
  };
  const [choosenLocation, setChoosenLocation] =
    useState<ChoosenLocation>(initialLocation);
  const [currentStatus, setCurrentStatus] = useState<Record<any, any>>();

  useEffect(() => {
    if (weatherData) setChoosenLocation(weatherData.location);
  }, [weatherData]);

  return (
    <View className="mx-4 justify-around flex-1 mb-2">
      {/* location details */}
      <Text className="text-white text-center text-2xl font-bold">
        {choosenLocation.name},{" "}
        <Text className="text-lg font-semibold text-gray-300">
          {choosenLocation.country}
        </Text>
      </Text>
      {/* Weather image */}
      <View className="flex-row justify-center">
        <Image
          source={require("../../../assets/images/partlycloudy.png")}
          className="w-52 h-52"
        />
      </View>
      {/* Degree celcius */}
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">
          23&#176;
        </Text>
        <Text className="text-center text-white text-xl tracking-widest">
          Partly Cloudy
        </Text>
      </View>
      {/* other status */}
      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../../assets/icons/wind.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">22km</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../../assets/icons/drop.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">23%</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            source={require("../../../assets/icons/sun.png")}
            className="h-6 w-6"
          />
          <Text className="text-white font-semibold text-base">7:05 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default LocationDetails;
