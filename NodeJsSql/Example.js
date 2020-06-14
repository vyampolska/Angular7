let sql = require('mssql');
let express = require('express');
let app = express();
let port = 3000;


app.listen(port, function () {
    console.log("server has started on port "+port);
});

let dbConfig = {
    user: '...',
    password: '...',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'master',
}



sql.connect(dbConfig, err => {        //connection to sql server

    if (err){
        console.log("failed to connect to db");
    } else {
        console.log("connected to db");
    }

})

sql.on('error', err => {

});

app.get("/getQuestions" , (request, response) => {                      //make api 'getQuestions'
    let id = request.query.id;                                          //get id from request
    let sqlQuery = "select "+id+" questions";                                // sql query
    new sql.Request().query(sqlQuery, (err, result) => {   //make sql request
        if (err){                                                         // if request to db failed
            response.status(200).send("failed db");
        } else {                                                            // if request succeed
            response.status(200).send(result);
        }
    })
})


