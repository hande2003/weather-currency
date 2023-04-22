import React from "react";
import Image from "next/image";
import { code } from "../../../public/code"

export default function TodaysWeather({ place, today }) {
  let location = place.split("-");
  let comment = parseInt(today.weathercode);
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  let todayDate = new Date().toLocaleDateString("en-IN", options);

console.log(today);
  return (
    <div className="card col-md-auto shadow-lg text-bg-warning">
      <div className="card-body d-flex justify-content-between align-items-center">
          
        <div id="info">
            <h3 className="fw-light">
              {`${todayDate}`}
            </h3>

            <h1 className="display-4 fw-bold">
              {location[1]} ({location[0]})
            </h1>

            <h2 className="d-flex gap-3">
              <span><b>{parseFloat(today.temp_max).toFixed(0)}</b>&deg;C</span>
              <span><b>{parseFloat(today.temp_min).toFixed(0)}</b>&deg;C</span>
            </h2>

            <div className="d-flex gap-3">
              <div>
                <span className="d-block">Sunrise</span>
                <span className="fw-bold">
                  {new Date(today.sunrise).toLocaleTimeString("en-US")}
                </span>
              </div>

              <div>
                <span className="d-block">Sunset</span>
                <span className="fw-bold">
                  {new Date(today.sunset).toLocaleTimeString("en-US")}
                </span>
              </div>
            </div>
          </div>

          <div id="img-info" className="d-block">
            <div className="d-flex justify-content-center rounded">
              <Image
                src={`https://openweathermap.org/img/wn/${code[comment].newCode}@2x.png`}
                alt="Weather Icon"
                width={100}
                height={100}
              />
            </div>
            <h3 className="text-center">{`${code[comment].description}`}</h3>
          </div>
      
      </div> 
    </div>
  );
}