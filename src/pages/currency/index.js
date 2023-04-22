/* eslint-disable react/jsx-key */
import { useCallback, useEffect, useState } from "react";
const axios = require('axios');
import setup from "@/database";
import Navigation from "@/components/Navigation";
import CurrencyResult from "@/components/currency/CurrencyResult";
import CurrencyDropdown from "@/components/currency/CurrencyDropDown";
import Footer from "@/components/Footer";

let Currency = ({currency})=>{
    let [from, setFrom] = useState(()=> "USD");
    let [to, setTo] = useState(()=> "INR");
    let [inputValue, setInputValue] = useState(()=> 0);
    let [outputValue, setOutputValue] = useState(()=> 0);
    let [exchangeValue, setExchangeValue] = useState(()=>null);

    
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
            <Navigation/>
            <div className='row justify-content-center align-items-center my-5'>
                <div className="col-sm-auto mt-5">
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
                        {exchangeValue} && 
                        <CurrencyResult 
                            inputValue={inputValue} 
                            outputValue={outputValue} 
                            from={from} 
                            to={to}
                        />
                    }
                </div>
            </div>
            <Footer previous="/weather" next="/"/>
        </>
    );
};

export default Currency;


export async function getStaticProps() {
    try{    
        let db = await setup();
        let currency = await db.all("select * from Currency");
        return {
            props:{
                currency
            }
        } 
    }
    catch(e){
        console.log(e);
    }
  }
