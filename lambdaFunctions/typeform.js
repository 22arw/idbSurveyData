// const axios = require('axios');
const http = require('http');

exports.handler = function(event, context, callback) {

    baseURL = 'https://api.typeform.com/';
    formID = 'ue4FsQ';
    accessToken = 'CuAPnXc9Lb5KuqdqPLbTETRmitNHXEP6tUV8VWW38HqA';

    typeformURL = baseURL + 'forms/' + formID + '/responses';

    // axios.get(typeformURL)
    //     .then(function(response) {
    //         console.log(response.data);
    //         console.log(response.status);
    //         console.log(response.statusText);
    //         console.log(response.headers);
    //         console.log(response.config);
    //     }).catch(error => {
    //         console.log(error);
    //     });
   

    callback(null, {
        statusCode: 200,
        body: "Hello, World"
    });
}