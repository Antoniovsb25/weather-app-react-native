import axios from "axios";
import { WEATHER_API_TOKEN } from "@env";

const forecastEndpoint = (params: Record<string, string>) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_TOKEN}&q=${params.cityName}&days=${params.days}`;

const locationsEndpoint = (params: Record<string, string>) =>
  `https://api.weatherapi.com/v1/search.json?key=${WEATHER_API_TOKEN}&q=${params.cityName}`;

const apiCall = async (endpoint: string) => {
  const options = {
    method: "GET",
    url: endpoint,
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.error("error calling the weather api", err);
    return;
  }
};

export const fetchWeatherForecast = (params: Record<string, string>) => {
  return apiCall(forecastEndpoint(params));
};

export const fetchLocations = (params: Record<string, string>) => {
  return apiCall(locationsEndpoint(params));
};
