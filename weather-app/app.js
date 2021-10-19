const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=944d22168a53670cb7dbc5b7c5c65789&query=Hanoi';

// request({ url: url, json: true }, (error, respone ) => {
//     console.log(respone.body.current)
//     console.log(`It is currently ${respone.body.current.temperature} degrees out`)
// });

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmFuZG9tYW1hemluZyIsImEiOiJja3V4dHgxeGM2dzB0Mm5xanh4OHRybGZ4In0.lfyLS5gsaa3kAQB-wRfjHg&limit=1';

request({ url: url, json: true }, (error, respone ) => {
    const data = respone.body.features[0];
    console.log(data.center)
});