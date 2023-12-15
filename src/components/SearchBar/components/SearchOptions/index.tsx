import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchOptions = () => {
  const [locations, setLocations] = useState([1, 2, 3]);
  const handleLocation = (location) => {
    console.log(location);
  };
  return (
    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
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
            London, United Kingdom
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SearchOptions;
