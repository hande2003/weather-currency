import Head from 'next/head';
import setup from "@/database";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WeatherDropDown from '@/components/weather/WeatherDropDown';
import TodaysWeather from '@/components/weather/TodaysWeather';
import CurrencyDropdown from '@/components/currency/CurrencyDropDown';
import CurrencyResult from '@/components/currency/CurrencyResult';

import { useCallback, useState, useEffect } from 'react';

const axios = require('axios');

export default function Home({currency, weather}) {
  // Weather variables
  let [lattitude, setLattitude] = useState(()=>"19.0760");
  let [longitude, setLongitude] = useState(()=> "72.8777");
  let [city, setCity] = useState(()=> "India-Mumbai");
  let [today, setToday] = useState(()=>null);

  let fetchWeather = useCallback(async()=>{
    let URL = `/api/weather/${lattitude}/${longitude}`;
    let weatherFetch = await axios(URL);
    setToday(()=> weatherFetch.data.today)
    setCity(()=> document.getElementById("select-weather").selectedOptions[0].text)
  }, [lattitude, longitude]);

  useEffect(()=>{
    fetchWeather();
  }, [fetchWeather, lattitude, longitude]);

  let handleChange = (e)=>{
    let coord = (e.target.value).split("-");
    setLattitude(()=> coord[0]);
    setLongitude(()=> coord[1]);
  }

  // Currency variable
  let [from, setFrom] = useState(()=> "USD");
  let [to, setTo] = useState(()=> "INR");
  let [inputValue, setInputValue] = useState(()=> 0);
  let [outputValue, setOutputValue] = useState(()=> 0);
  let [exchangeValue, setExchangeValue] = useState(()=>"");

  
  let reqChangeRate = useCallback(async()=>{
      let URL = `/api/currency/${from}/${to}`
      let reqChange = await axios(URL);
      setExchangeValue(()=> reqChange.data.result)
  }, [from, to]);

  useEffect(()=>{   
  reqChangeRate();
  }, [from, to, reqChangeRate]);

  useEffect(()=>{
      setOutputValue(()=> (inputValue*exchangeValue).toFixed(2))
  }, [inputValue, exchangeValue]);

  let handleFrom = (e)=>{
      setFrom(()=> e.target.value);
  };

  let handleTo = (e)=>{
      setTo(()=> e.target.value);
  };

  let handleInput = (e)=>{
      setInputValue(()=> e.target.value);
  }

  return (
    <>
      <Head>
        <title>Weather-Currency Application</title>
      </Head>
      <main>
        <Navigation/>
        
        <div className='row h-75 text-bg-light align-items-center justify-content-center my-5'>
          
          <div id="widgets" className="row justify-content-between  align-items-center px-5">
            <div id="weather-app" className='col mt-5'>
              <div className='card'>
                <div className='card-body'>
                <h5 class="card-title">Weather Widget</h5>
                <WeatherDropDown weather={weather} handleChange={handleChange}/>
                {
                  today && 
                  <TodaysWeather 
                  place={city}
                  today={today}
                  />
                            
                }
                </div>
              </div>
            </div>
              
            <div id="currency-app" className='col my-5'>
              <div className='card'>
                <div className='card-body'>
                <h5 class="card-title">Currency Widget</h5>
                <CurrencyDropdown 
                currency={currency} 
                inputValue={inputValue} 
                from={from} 
                to={to}
                handleFrom={handleFrom}
                handleInput={handleInput}
                handleTo={handleTo}
              />
              {
                  exchangeValue !== "" && 
                  <CurrencyResult 
                      inputValue={inputValue} 
                      outputValue={outputValue} 
                      from={from} 
                      to={to}
                  />
              }
                </div>
              </div>
            </div>
          </div>
        
        </div>
        
        <Footer previous="/currency" next="/weather"/>
      </main>
    </>
  )
};

export async function getStaticProps() {
  try{    
      let db = await setup();
      let weather = await db.all("select * from Weather");
      let currency = await db.all("select * from Currency");
      return {
          props:{
              weather, currency
          }
      } 
  }
  catch(e){
      console.log(e);
  }
};

