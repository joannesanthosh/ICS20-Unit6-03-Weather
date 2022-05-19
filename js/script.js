/* Created by: Joanne Santhosh
 * Created on: May 2022
 * This file contains the JS functions for index.html
 */

"use strict"

/**
 * Get API info.
*/
// code from: https://www.youtube.com/watch?v=670f71LTWpM

const getWeather = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress)
    const jsonData = await request.json()
    var tempK = jsonData.main.temp
    var tempC = 0
    console.log(jsonData.main.temp)
    if (request.status >= 200 && request.status < 400) {
 }
    tempC = (tempK - 273.15)
    
    document.getElementById("api-weather").innerHTML =
    'The current weather is ' + tempC.toFixed(2)
  } catch (err) {
    console.log(err)
  }
}
getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    var icon = jsonData.main.icon
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
    '<img src="' + icon + 
      '" alt="API image" class="center" ' +
      '>'
  } catch (err) {
    console.log(err)
  }
}

getImage("https://samples.openweathermap.org/data/2.5/weather?q=London&appid=b1b15e88fa797225412429c1c50c122a1")