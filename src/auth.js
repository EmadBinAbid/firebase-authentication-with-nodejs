const firebaseConfig = require("../config/firebase-config");

const admin = firebaseConfig.admin;
const firebase = firebaseConfig.firebase;

// Check authtoken
exports.checkAuth = function (req, res, next) {
    if (req.path == '/login' || req.path == '/register') {
        return next();
    }
    if (req.headers.authtoken) {
        admin.auth().verifyIdToken(req.headers.authtoken)
            .then(() => {
                next()
            }).catch(() => {
                res.status(403).send('Unauthorized')
            });
    } else {
        res.status(403).send('Unauthorized')
    }
}

exports.register = function (req, res) {
    admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
    })
        .then(function (userRecord) {
            console.log('Successfully created new user:', userRecord.uid);
            res.json({
                message: `Successfully created new user:, ${userRecord.uid}`
            });
        })
        .catch(function (error) {
            console.log('Error creating new user:', error);
            res.json({
                message: `Error creating new user:, ${error}`
            });
        });
}

exports.login = function (req, res) {
    var token;
    firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
        .then(function (userRecord) {
            firebase.auth().currentUser.getIdToken(true)
                .then(function (idToken) {
                    res.json({
                        message: `Successfully signed in`,
                        token: idToken
                    });
                })
                .catch(function (error) {
                    console.log('Error while generating token:', error);
                });
        })
        .catch(function (error) {
            console.log('Error while signing in:', error);
            res.json({
                message: `Error while signing in:, ${error}`
            });
        });
}