const db = require('./db');
const imgURLfetcher = require('./imgURLfetcher');

const productData = async () => {
  const arr = await db.fetchingProduct();
  for (const ele of arr) {
    const path = 'KisanBrothers/' + ele.Dawai.toLowerCase();
    const url = await imgURLfetcher.fetchFileByName(`${path}.jpeg`);
    ele.src = url;
  }
  return arr;
};


// productData().then((arr) => {
//   console.log(arr);
// })


module.exports = productData

