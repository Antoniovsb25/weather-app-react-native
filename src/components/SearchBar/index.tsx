import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchOptions from "./components/SearchOptions";

const SearchBar = () => {
  const [showSearch, toggleSearch] = useState(false);
  return (
    <>
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
              className="pl-6 h-10 flex-1 text-base text-white"
              placeholder="Search City"
              placeholderTextColor={"lightgray"}
            />
          ) : null}
          <TouchableOpacity
            className="bg-white/30 rounded-full p-3 m-1"
            onPress={() => toggleSearch(!showSearch)}
          >
            <Ionicons name="search" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {showSearch && <SearchOptions />}
    </>
  );
};

export default SearchBar;
