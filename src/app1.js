const admin = require('firebase-admin');
const serviceAccount = require('./challenge-a60e9-firebase-adminsdk-n7jce-d6f698da6e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://challenge-a60e9.appspot.com' // Replace with your Firebase Storage bucket
});

const bucket = admin.storage().bucket();

module.exports = {bucket, admin};