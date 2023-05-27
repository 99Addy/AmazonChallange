const admin = require('firebase-admin');

const serviceAccount = require('./challenge-a60e9-firebase-adminsdk-n7jce-d6f698da6e.json'); // Replace with the path to your service account key JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://challenge-a60e9-default-rtdb.firebaseio.com", // Replace with your database URL
  storageBucket: 'gs://challenge-a60e9.appspot.com'
});

const bucket = admin.storage().bucket();

module.exports = {admin, bucket};
