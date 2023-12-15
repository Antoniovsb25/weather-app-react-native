import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LocationDetails from "../../components/LocationDetails";
import NextDaysForecast from "../../components/NextDaysForecast";

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
        <LocationDetails />
        <NextDaysForecast />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
