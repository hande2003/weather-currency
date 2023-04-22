let CurrencyResult = ({inputValue, outputValue, from, to})=>{
    return (
        <div className="w-100 align-baseline rounded-pill text-center mt-3 bg-warning-subtle text-dark">
            <p><b>{inputValue}</b> {from} &nbsp; <em>is</em> &nbsp;<span className="display-5"><b>{outputValue}</b> {to}</span></p>
        </div>
    )
}

export default CurrencyResult;