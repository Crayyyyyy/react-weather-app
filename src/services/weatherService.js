const API_KEY = "c6de92dc2a7c61f0529235529c247597";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// tokyoc6de92dc2a7c61f0529235529c247597

const getWeatherData = async (cityName) => {

  const url = `${BASE_URL}/weather?q=${cityName}&units=${"metric"}&appid=${API_KEY}`;


  try {

    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (e) {
    console.log("dojebalo sa to");
    return null;
  }

}

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed }
  } = data;

  const { main: details, icon } = weather[0];

  return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, weather, speed, details, icon };
}

const getFormattedWeatherData = async (searchParams) => {
  const weatherData = await getWeatherData(searchParams).then(formatCurrentWeather);
  return weatherData;
}



export default getFormattedWeatherData;