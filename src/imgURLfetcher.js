const app = require('./initializedApp')

const bucket = app.bucket;

async function fetchFileByName(fileName) {
  const file = bucket.file(fileName);
  const options = {
    version: 'v4',
    action: 'read',
    expires: Date.now() + 15 * 60 * 1000, // URL expiration time (15 minutes from now)
  };

  const [url] = await file.getSignedUrl(options);
  // console.log('URL:', url);
  // console.log('File fetched successfully');
  return url;
}

// fetchFileByName('KisanBrothers/Parmanu.jpg')
//   .catch(error => {
//     console.error('Error fetching file:', error);
//   });

module.exports = {fetchFileByName};
