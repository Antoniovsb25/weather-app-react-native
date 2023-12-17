import React from "react";
import { View, Text, Image } from "react-native";
import { ConditionText, weatherImages } from "../../../../constants";

type DayProps = {
  date: any;
  avgtemp_c: number;
  condition: {
    text: string;
  };
};

const DailyForecastCard = ({ date, avgtemp_c, condition }: DayProps) => {
  const conditionText = condition.text as ConditionText;
  const selectedImage = weatherImages[conditionText];
  const newDate = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
  };
  const dayName = newDate.toLocaleDateString("en-US", options);
  return (
    <View className="justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20">
      <Image source={selectedImage} className="h-11 w-11" />
      <Text className="text-white text-center">{dayName}</Text>
      <Text className="text-white text-xl font-semibold">
        {avgtemp_c}&#176;
      </Text>
    </View>
  );
};

export default DailyForecastCard;
