import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { type Location } from "../../index";
import { fetchWeatherForecast } from "../../../../api/weather";
import { useWeather } from "../../../../context/weather-context";

type SearchOptionsProps = {
  locations: Location[];
  setResetLocation: () => void;
};

const SearchOptions = ({ locations, setResetLocation }: SearchOptionsProps) => {
  const { setWeatherForecast, setLoading } = useWeather();

  const handleLocation = (location: Location) => {
    setResetLocation();
    setLoading(true);
    fetchWeatherForecast({ cityName: location.name, days: "5" })
      .then((data) => {
        setWeatherForecast(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("something went wrong", err);
        setLoading(false);
      });
  };

  return (
    <ScrollView className="absolute w-full bg-gray-300 top-16 rounded-3xl">
      {locations.map((location, index) => (
        <TouchableOpacity
          onPress={() => handleLocation(location)}
          className={`flex-row items-center border-0 p-3 px-4 mb-1 ${
            locations.length - 1 === index ? "" : "border-b-2 border-b-gray-400"
          }`}
          key={index}
        >
          <Ionicons name="location-outline" size={24} />
          <Text className="text-black text-lg ml-2">
            {location.name}, {location.country}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SearchOptions;
