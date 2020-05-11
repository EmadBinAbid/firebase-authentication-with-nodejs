const helloSrc = require("../src/hello");

exports.sayHelloWorld = function(app) {
    app.get('/hello-world', (req, res) => {
        res.json({
            message: 'Hello World!'
        })
    })
}

exports.sayHelloUser = function(app) {
    app.get('/hello-user', (req, res) => {
        res.json({
            message: 'Hello User!'
        })
    })
}