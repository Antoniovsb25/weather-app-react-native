// WeatherContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

type WeatherContextType = {
  weatherData: any;
  setWeatherForecast: (data: any) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
};

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

type WeatherProviderProps = {
  children: ReactNode;
};

export const WeatherProvider: React.FC<WeatherProviderProps> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const setWeatherForecast = (data: any) => {
    setWeatherData(data);
  };

  const setLoadingSpinner = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return (
    <WeatherContext.Provider
      value={{ weatherData, setWeatherForecast, loading, setLoading }}
    >
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
