const API_KEY = "ca67e84d64814a10957154901240912";
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const apiResponse = await fetch(BASE_URL + `&q=${city}`);
    const weatherData = await apiResponse.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
};

const forecast = async (city) => {
  // Include forecast service
  // Example url:
  // http://api.weatherapi.com/v1/forecast.json?key=478ba1c2a1574805b3c194515241608&q=London&days=1&aqi=no&alerts=no
};

export { show };
