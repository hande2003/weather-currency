require("dotenv").config();
let axios = require("axios");

export default async function handler(req, res){
    const {lat, long} = req.query;
    let URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode&daily=sunrise&daily=sunset&forecast_days=8&daily=temperature_2m_max&daily=temperature_2m_min&timezone=auto&current_weather=true`
    await axios.get(URL).then(response => {
        let dailyTime = `${response.data.daily.time}`.split(",");
        let code = `${response.data.daily.weathercode}`.split(",");
        let sunrise = `${response.data.daily.sunrise}`.split(",");
        let sunset = `${response.data.daily.sunset}`.split(",");
        let maxTemp = `${response.data.daily.temperature_2m_max}`.split(",");
        let minTemp = `${response.data.daily.temperature_2m_min}`.split(",");

        return res.status(200).json(
        
        {
            today:{
                "temperature": `${response.data.current_weather.temperature}`,
                "time": `${response.data.current_weather.time}`,
                "weathercode": code[0],
                "sunrise": sunrise[0],
                "sunset": sunset[0],
                "temp_max": maxTemp[0],
                "temp_min": minTemp[0]
            },
            
            daily:{
                "time": dailyTime.slice(1),
                "weathercode": code.slice(1),
                "sunrise": sunrise.slice(1),
                "sunset": sunset.slice(1),
                "temp_max": maxTemp.slice(1),
                "temp_min": minTemp.slice(1),
            }
        }
    )})
};