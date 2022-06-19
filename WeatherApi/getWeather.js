require("dotenv").config()
const API_KEY = process.env.API_KEY

////weather api call
const request =require('request');
var getWeather = (lat,lon,callback) => {
  request ({
  url: ​`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  json: true
  },(error,response,body) =>
    {
    if(!error && response.statusCode === 200) {
      callback(undefined,{
      Temp: body.main.temp
    });
    }
    else {
      callback('unable to fetch weather');
    }
  });
};
module.exports.getWeather = getWeather;