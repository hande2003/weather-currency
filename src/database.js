let sqlite = require("sqlite");
let sqlite3 = require("sqlite3");

export default async function setup(){
    try{
        let db = await sqlite.open({
            filename: "./mydb.db",
            driver: sqlite3.Database
        })

        return db;
    }
    catch(e){
        console.log(e);
    }
};
