require("dotenv").config();
let axios = require("axios");

export default async function handler(req, res){
    const {from, to} = req.query;
    let URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}`
    await axios.get(URL).then(response => res.json({result:`${response.data.conversion_rate}`}));
};