const authSrc = require("../src/auth");

exports.register = function (app, admin) {
    app.post('/register', (req, res) => {
        if (req.body.email && req.body.password) {
            authSrc.register(req, res);
        }
        else {
            res.json({
                message: 'Request payload must contain email and password'
            })
        }
    })
}

exports.login = function (app, firebase) {
    app.post('/login', (req, res) => {
        if (req.body.email && req.body.password) {
            authSrc.login(req, res);
        }
        else {
            res.json({
                message: 'Request payload must contain email and password'
            })
        }
    })
}