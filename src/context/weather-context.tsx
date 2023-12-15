// WeatherContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type WeatherContextType = {
  weatherData: any; 
  setWeatherForecast: (data: any) => void; 
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

type WeatherProviderProps = {
  children: ReactNode;
};

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<any | null>(null);

  const setWeatherForecast = (data: any) => {
    setWeatherData(data);
  };

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherForecast }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
