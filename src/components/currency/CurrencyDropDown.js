/* eslint-disable react/jsx-key */
let CurrencyDropdown = ({currency, from, to, inputValue, handleFrom, handleTo, handleInput})=>{
    return (
        <div className="card bg-warning">
            <div className="card-body">
                <div class="input-group my-3">
                    <label class="input-group-text" for="fromCurrency">From</label>
                    <input type="number" name="num" aria-label="First name" class="form-control" defaultValue={inputValue} onChange={handleInput}/>
                    <select class="form-select" name="from" id="fromCurrency" onChange={handleFrom} defaultValue={from}>
                        {Object.keys(currency).map(item => <option value={currency[item].CODE}>{currency[item].CURRENCY_NAME}</option>)}
                    </select>
                </div>

                <div class="input-group mb-3">
                    <label class="input-group-text" for="toCurrency">To</label>
                    <select class="form-select" name="to" id="toCurrency" onChange={handleTo} defaultValue={to}>
                        {Object.keys(currency).map(item => <option value={currency[item].CODE}>{currency[item].CURRENCY_NAME}</option>)}
                    </select>
                </div>
            
            </div>  
        </div> 
    )
}

export default CurrencyDropdown;