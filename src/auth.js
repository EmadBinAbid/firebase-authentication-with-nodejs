// Check authtoken
exports.checkAuth = function(req, res, next) {
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
  