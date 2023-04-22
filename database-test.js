let sqlite = require("sqlite");
let sqlite3 = require("sqlite3");

async function setup(){
    try{
        let db = await sqlite.open({
            filename: "./mydb.db",
            driver: sqlite3.Database
        })

        await db.migrate({force: "last"});

        let currency = await db.all("select * from Weather");
        
        console.log(currency);
    }
    catch(e){
        console.log(e);
    }
};

setup();



