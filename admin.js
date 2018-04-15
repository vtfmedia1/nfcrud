const admin = require('firebase-admin');

var serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


module.exports = admin;