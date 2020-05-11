// Firebase Setup
var admin = require("firebase-admin");
const firebase = require("firebase");
var serviceAccount = require("../docs/service-key.json");

exports.admin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "YOUR_DATABASE_URL"
});

exports.firebase = firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID"
});