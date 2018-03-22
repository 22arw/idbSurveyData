const https = require('https');

exports.handler = function(event, context, callback) {

    baseURL = 'https://api.typeform.com/';
    formID = 'ue4FsQ';
    accessToken = 'CuAPnXc9Lb5KuqdqPLbTETRmitNHXEP6tUV8VWW38HqA';

    typeformURL = baseURL + 'forms/' + formID + '/responses';

    console.log(typeformURL);

    function getUrl (url) {
        return new Promise((resolve, reject) => {
          const req = https.request(url, (res) => {
            if (res.statusCode !== 200) {
              res.resume()
              reject('failed to fetch '+url)
              return
            }
      
            res.setEncoding('utf8')
            let rawData = ''
            res.on('data', (chunk) => { rawData += chunk; })
            res.on('end', () => {
              resolve(rawData)
            })
          })
          req.on('error', console.error)
        //   req.setHeader('authorization', 'bearer' + accessToken)
        req.setHeader('authorization', accessToken)

          req.end()
        })
      }
      
      getUrl(typeformURL).then((rawData) => { 
        const data = JSON.parse(rawData)
        console.log(data)
      }).catch(console.error)

    callback(null, {
        statusCode: 200,
        body: "Hello, World"
    });
}