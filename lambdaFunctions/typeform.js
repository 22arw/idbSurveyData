const https = require('https');

var baseURL = 'https://api.typeform.com/';
var formID = 'ue4FsQ';
var accessToken = 'CuAPnXc9Lb5KuqdqPLbTETRmitNHXEP6tUV8VWW38HqA';
var page_size = 'page_size=1000';

var typeformURL = baseURL + 'forms/' + formID + '/responses' + '?' + page_size + '&completed=true';

exports.handler = function(event, context, callback) {

  if (event.queryStringParameters.since != undefined && event.queryStringParameters.until != undefined) {
    let since = event.queryStringParameters.since;
    let until = event.queryStringParameters.until;
    typeformURL += "&since=" + since + "&until=" + until;
  }

  console.log(typeformURL);

  function getUrl (url) {
    return new Promise((resolve, reject) => {
      const req = https.request(url, (res) => {
        if (res.statusCode !== 200) {
          res.resume()
          reject('failed to fetch ' + url)
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
      req.setHeader('authorization', 'bearer ' + accessToken)

      req.end()
    })
  }

  getUrl(typeformURL).then((rawData) => { 
    const data = JSON.parse(rawData)
    // console.log(data)

    callback(null, {
        statusCode: 200,
        body: rawData
    });

  }).catch(console.error)
}

