const app = require('./initializedApp');

const admin = app.admin;

const fetchingProduct = () => {
  // console.log("In fetching Prod")
  return new Promise((resolve, reject) => {
  const db = admin.database();
  const ref = db.ref('/'); // Replace with the path to your desired node

  ref.once('value', (snapshot) => {
    const data = snapshot.val();
    // console.log('data: ',data);
    resolve(data);
    }, (error) => {
      reject([]);
      // console.error(error);
  });
  })
  
}

module.exports = {fetchingProduct};



