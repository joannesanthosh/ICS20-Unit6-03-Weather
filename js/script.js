/* Created by: Joanne Santhosh
 * Created on: May 2022
 * This file contains the JS functions for index.html
 */

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-03-Weather/sw.js", {
    scope: "/ICS20-Unit6-03-Weather/",
  });
}

/**
 * Get API info.
 */
// code from: https://www.youtube.com/watch?v=670f71LTWpM

/**
 * Get API info.
 */
const getWeather = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress);
    const jsonData = await request.json();
    var tempK = jsonData.main.temp;
    var tempC = 0;
    const feeling = jsonData.weather[0];
    const image = feeling.icon;

    console.log(jsonData.weather);
    document.getElementById("api-image").innerHTML =
      "<img src='http://openweathermap.org/img/wn/" +
      image +
      "@2x.png' alt='Weather Icon' width='10%'><br><h5>";
    (">");

    // Calculate from Kalvin to Celsius
    tempC = tempK - 273.15;

    document.getElementById("api-weather").innerHTML =
      "The current weather is " + tempC.toFixed(2) + " °C";
  } catch (err) {
    console.log(err);
  }
};
getWeather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
);
