import { ImageSourcePropType } from "react-native";
export type ConditionText =
  | "Partly cloudy"
  | "Moderate rain"
  | "Patchy rain possible"
  | "Sunny"
  | "Clear"
  | "Overcast"
  | "Cloudy"
  | "Light rain"
  | "Moderate rain at times"
  | "Heavy rain"
  | "Heavy rain at times"
  | "Moderate or heavy freezing rain"
  | "Moderate or heavy rain shower"
  | "Moderate or heavy rain with thunder"
  | "Mist"
  | "other";

export const weatherImages: Record<ConditionText, any> = {
  "Partly cloudy":
    require("../../assets/images/partlycloudy.png") as ImageSourcePropType,
  "Moderate rain":
    require("../../assets/images/moderaterain.png") as ImageSourcePropType,
  "Patchy rain possible":
    require("../../assets/images/moderaterain.png") as ImageSourcePropType,
  "Sunny": require("../../assets/images/sun.png") as ImageSourcePropType,
  "Clear": require("../../assets/images/sun.png") as ImageSourcePropType,
  "Overcast": require("../../assets/images/cloud.png") as ImageSourcePropType,
  "Cloudy": require("../../assets/images/cloud.png") as ImageSourcePropType,
  "Light rain":
    require("../../assets/images/moderaterain.png") as ImageSourcePropType,
  "Moderate rain at times":
    require("../../assets/images/moderaterain.png") as ImageSourcePropType,
  "Heavy rain":
    require("../../assets/images/heavyrain.png") as ImageSourcePropType,
  "Heavy rain at times":
    require("../../assets/images/heavyrain.png") as ImageSourcePropType,
  "Moderate or heavy freezing rain":
    require("../../assets/images/heavyrain.png") as ImageSourcePropType,
  "Moderate or heavy rain shower":
    require("../../assets/images/heavyrain.png") as ImageSourcePropType,
  "Moderate or heavy rain with thunder":
    require("../../assets/images/heavyrain.png") as ImageSourcePropType,
  "Mist": require("../../assets/images/mist.png") as ImageSourcePropType,
  "other": require("../../assets/images/moderaterain.png") as ImageSourcePropType,
};
