import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/AppNavigation";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar  />
        <AppNavigation />
      </NavigationContainer>
    </>
  );
}
