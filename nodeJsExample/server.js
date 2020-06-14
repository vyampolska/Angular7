let express = require('express');
let sql = require('mssql');
let app = express();

let port = 3000;

app.listen(port, function () {
    console.log("server has started on port "+port);
});

app.get('/hello', function (request, response) {
    response.status(200).send("welcome to server");
})

app.get('/helloName', function (request, response) {
    let name = request.query.name; //we expect parametr name
})

