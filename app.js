var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

const authSrc = require('./src/auth');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', authSrc.checkAuth);

const authRoute = require('./routes/auth');
const helloRoute = require('./routes/hello');

authRoute.register(app);
authRoute.login(app);

helloRoute.sayHelloWorld(app);
helloRoute.sayHelloUser(app);


module.exports = app;