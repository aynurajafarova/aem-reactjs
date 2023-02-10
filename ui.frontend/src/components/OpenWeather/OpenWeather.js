import React from "react";
import { MapTo } from "@adobe/aem-react-editable-components";
import ReactWeather, { useOpenWeather, useWeatherBit } from "react-open-weather";

// Open weather API Key
// For simplicity it is hard coded in the file, ideally this is extracted in to an environment variable
const API_KEY = "7628ace9c2ec2cf0ac6bdb4e9b00941e";

// Logic to render placeholder or component
const OpenWeatherEditConfig = {
  emptyLabel: "Weather",
  isEmpty: function (props) {
    return !props || !props.lat || !props.lon || !props.label;
  },
};

// Wrapper function that includes react-open-weather component
function ReactWeatherWrapper(props) {
  // const { data, isLoading, errorMessage } = useOpenWeather({
  //   key: API_KEY,
  //   lat: props.lat, // passed in from AEM JSON
  //   lon: props.lon, // passed in from AEM JSON
  //   lang: "en",
  //   unit: "imperial", // values are (metric, standard, imperial)
  // });

  const { data, isLoading, errorMessage } = useWeatherBit({
    key: '7fc9a565a87a4dfd9eba2a888ea5f30f',
    lat: props.lat,
    lon: props.lon,
    lang: 'en',
    unit: 'M', // values are (M,S,I)
  });

  return (
    <div className="cmp-open-weather">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel={props.label} // passed in from AEM JSON
        unitsLabels={{ temperature: "F", windSpeed: "mph" }}
        showForecast={false}
        // forecast="today"
        // type="city"
        // city="Warsaw"
      />
    </div>
  );
}

export default function OpenWeather(props) {
  // render nothing if component not configured
  if (OpenWeatherEditConfig.isEmpty(props)) {
    return null;
  }

  // render ReactWeather component if component configured
  // pass props to ReactWeatherWrapper. These props include the mapped properties from AEM JSON
  return ReactWeatherWrapper(props);
}

// Map OpenWeather to AEM component
MapTo("wknd-spa-react/components/open-weather")(
  OpenWeather,
  OpenWeatherEditConfig
);
