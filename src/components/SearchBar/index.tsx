import React, { useState, useRef } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchOptions from "./components/SearchOptions";
import { fetchLocations } from "../../api/weather";

export type Location = {
  country: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
};

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const textInputRef = useRef<TextInput>(null);

  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value })
        .then((data) => {
          setLocations(data);
        })
        .catch((err) => console.error("no places found", err));
    }
  };

  const handleTextInputLayout = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  return (
    <View className="mx-4 relative z-50">
      <View
        style={{
          backgroundColor: showSearch
            ? "rgba(255, 255, 255, 0.2)"
            : "transparent",
        }}
        className="flex-row justify-end items-center rounded-full"
      >
        {showSearch ? (
          <TextInput
            ref={textInputRef}
            className="pl-6 h-10 flex-1 text-base text-white"
            placeholder="Search City"
            placeholderTextColor={"lightgray"}
            onChangeText={handleSearch}
            onLayout={handleTextInputLayout}
          />
        ) : null}
        <TouchableOpacity
          className="bg-white/30 rounded-full p-3 m-1"
          onPress={() => setShowSearch(!showSearch)}
        >
          <Ionicons name="search" size={25} />
        </TouchableOpacity>
      </View>
      {showSearch && (
        <SearchOptions
          locations={locations}
          setResetLocation={() => setLocations([])}
        />
      )}
    </View>
  );
};

export default SearchBar;
