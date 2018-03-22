const http = require('http');

exports.handler = function(event, context, callback) {

    baseURL = 'https://api.typeform.com/';
    formID = 'ue4FsQ';
    accessToken = 'CuAPnXc9Lb5KuqdqPLbTETRmitNHXEP6tUV8VWW38HqA';

    typeformURL = baseURL + 'forms/' + formID + '/responses';



    function getUrl (url) {
        return new Promise((resolve, reject) => {
          https.get(url, (res) => {
              if (res.statusCode !== 200) {
                console.error('failed to fetch '+url)
                res.resume()
                reject()
                return
              }
      
              res.setEncoding('utf8')
              let rawData = ''
              res.on('data', (chunk) => { rawData += chunk; })
              res.on('end', () => {
                resolve(rawData)
              })
          })
        })
      }
      
      getUrl(typeformURL).then((data) => {
          console.log(data);
      })
   

    callback(null, {
        statusCode: 200,
        body: "Hello, World"
    });
}