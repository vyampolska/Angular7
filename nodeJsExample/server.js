let express = require('express');
let app = express();

let port = 3000;

function makeSomethign(param1){
    //sql reuest
    let request = "";
    return request;
}

function makeSomethingAsync(name, callback) {
    //sql request
    let res =[];
    callback(res);
}

app.listen(port, function () {
    console.log("server has started on port "+port);
});

app.get('/hello', function (request, response) {
    response.status(200).send("welcome to server");
})

app.get('/helloName', function (request, response) {
    let name = request.query.name; //we expect parametr name
    let makeSomethign(name, surname);
    makeSomethingAsync(name, makeSomethign)
})

