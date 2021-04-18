const request = require('request')


const geocode = (address, callback) => 
{
 const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWFuaWhhbnMxIiwiYSI6ImNrbmh5MHAwajBuaW0yd2x3Y3R0bW9sMG0ifQ.-aQ_ZLj8z4YQBXg0MWKfJA&limit=1'

  request({url, json: true}, (error, {body}) => 
  {
     if(error)
        {
         callback('unable to connect to location services', undefined)
        } else if (body.features.length === 0) 
        {
          callback('unable to find location, use another search')

        } else 
        {
         callback(undefined, {

            latitude:  body.features[0].center[1],
            longitude:  body.features[0].center[0],
            location:  body.features[0].place_name
         })
         }
  })
}


module.exports = geocode