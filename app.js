var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')

const authSrc = require('./src/auth');

// Firebase Setup
var admin = require("firebase-admin");
const firebase = require("firebase");
var serviceAccount = require("./docs/service-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "YOUR_DATABASE_URL"
});

firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID"
});

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