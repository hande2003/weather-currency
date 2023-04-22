/* eslint-disable react/jsx-key */
import React from "react";
import Image from "next/image";
import { code } from "../../../public/code"

export default function WeeklyWeather({ place, daily }) {
  let location = place.split("-");
  const options = { weekday: 'short', month: 'short', day: 'numeric' };

  return (
    // <div className="card">
       <div className="row justify-content-center my-5">
      {
        [...Array(7).keys()].map(i => {
          let comment = parseInt(daily.weathercode[i]);
          return (
            <div className="col-sm-auto mb-3">
              <div className="card shadow-lg bg-info bg-gradient overflow-auto">
                <div className="card-body d-flex justify-content-between align-items-center">
                    
                  <div id="daily-info">
                      
                          <h2 className="fw-light">
                            {`${new Date(daily.time[i]).toLocaleDateString("en-IN", options)}`}
                          </h2>

                          <h4 className="d-flex gap-3">
                            <span><b>{parseFloat(daily.temp_max[i]).toFixed(0)}</b>&deg;C</span>
                            <span><b>{parseFloat(daily.temp_min[i]).toFixed(0)}</b>&deg;C</span>
                          </h4>
                      

                      <div className="d-flex gap-3">

                        <div className="d-block lh-sm">
                            <span className="d-block">Sunrise</span>
                            <span className="fw-bold">
                              {new Date(daily.sunrise[i]).toLocaleTimeString("en-US")}
                            </span>
                        </div>

                        <div className="d-block lh-sm">
                            <span className="d-block">Sunset</span>
                            <span className="fw-bold">
                              {new Date(daily.sunset[i]).toLocaleTimeString("en-US")}
                            </span>
                        </div>
                        
                      </div>
                  
                  </div>

                  <div className="row rounded-4">
                            <div className="col-auto mx-auto rounded-4">
                            <Image
                              src={`https://openweathermap.org/img/wn/${code[comment].newCode}@2x.png`}
                              alt="Weather Icon"
                              width={100}
                              height={100}
                              className="col-auto"
                            />
                            </div>
                    </div>
                  
                </div> 
            </div>
          </div>
          )
        })
      }
       </div>
    // </div>
  );
}

