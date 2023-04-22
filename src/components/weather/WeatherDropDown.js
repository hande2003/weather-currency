let WeatherDropDown = ({weather, handleChange})=>{
    return(
        <div class="input-group my-3">
            <label class="input-group-text" for="select-weather">Location</label>                            
            <select class="form-select" name="from" id="select-weather" onChange={handleChange}>
                {Object.keys(weather).map(item => {
                let code = `${weather[item].COUNTRY}-${weather[item].CITY}`;
                let coord = `${weather[item].LATITUDE}-${weather[item].LONGITUDE}`
                return <option value={coord} key={code}>{code}</option>
                })}
            </select>
        </div>
    )
};

export default WeatherDropDown;