import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={70}
        source={require("../../../assets/images/bg.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex-1">
        <SearchBar />

      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
