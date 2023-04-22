import setup from "@/database";
import { useEffect, useState, useCallback } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TodaysWeather from "@/components/weather/TodaysWeather";
import WeatherDropDown from "@/components/weather/WeatherDropDown";
import WeeklyWeather from "@/components/weather/WeeklyWeather";

const axios = require('axios');

let Weather = ({weather})=>{
    let [lattitude, setLattitude] = useState(()=>"19.0760");
    let [longitude, setLongitude] = useState(()=> "72.8777");
    let [city, setCity] = useState(()=> "India-Mumbai");
    let [today, setToday] = useState(()=>null);
    let [daily, setDaily] = useState(()=> null);

    let fetchWeather = useCallback(async()=>{
        let URL = `/api/weather/${lattitude}/${longitude}`;
        let weatherFetch = await axios(URL);
        setToday(()=> weatherFetch.data.today)
        setDaily(()=> weatherFetch.data.daily);
        setCity(()=> document.getElementById("select-weather").selectedOptions[0].text)
    }, [lattitude, longitude]);

    let handleChange = (e)=>{
        let coord = (e.target.value).split("-");
        setLattitude(()=> coord[0]);
        setLongitude(()=> coord[1]);
    }

    useEffect(()=>{
        fetchWeather();
    }, [fetchWeather, lattitude, longitude]);
    
    return(
        <>
            <Navigation/>
            <div className ='row align-items-center justify-content-center my-5'>
                <div className="col-sm-8 mx-auto mt-5">
                    <WeatherDropDown weather={weather} handleChange={handleChange}/>
                    {
                        today && 
                        <TodaysWeather 
                        place={city}
                        today={today}
                        />
                        
                    }
                    {
                        daily &&
                        <WeeklyWeather 
                        place={city}
                        daily={daily}
                        />
                        
                    }
                </div>
            </div>
            <Footer previous="/" next="/currency"/>
        </>
    )
};

export async function getStaticProps() {
    try{    
        let db = await setup();
        let weather = await db.all("select * from Weather");
        return {
            props:{
                weather
            }
        } 
    }
    catch(e){
        console.log(e);
    }
  };

export default Weather;
