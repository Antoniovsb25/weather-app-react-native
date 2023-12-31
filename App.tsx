import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/AppNavigation";
import { WeatherProvider } from "./src/context/weather-context";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <WeatherProvider>
          <StatusBar
            translucent
            backgroundColor="rgba(0, 0, 0, 0)"
            barStyle="default"
          />
          <AppNavigation />
        </WeatherProvider>
      </NavigationContainer>
    </>
  );
}
