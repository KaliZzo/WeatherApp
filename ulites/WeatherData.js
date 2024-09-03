const request =require('request');

const openWeatherMap ={
    BASE_URL: "https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY: "8c727d8eddffff59f787eb544d70e666",
}


const WeatherData =(address,callback)=>{
const url = 
openWeatherMap.BASE_URL + 
encodeURIComponent(address)+ 
"&APPID=" + 
openWeatherMap.SECRET_KEY;
console.log(url)


request({url, json: true}, (error,data) => {
  if(error){
         callback(true, "Unable to fetch data, please try again" + error);
     }
     callback(false, data?.body);
  })
};


module.exports = WeatherData;