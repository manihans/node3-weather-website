const request = require('request')

const forecast = (latitude, longitude, callback) => 
{

const url = 'http://api.weatherstack.com/current?access_key=a55776ef6f05ce12e2e3e15c90ac8ce9&query='+ latitude + ','+ longitude + '&units=f'

request({url, json: true}, (error, {body}) => 
  {
     if(error)
     {
        callback('unable to connect to weather app', undefined)
       } else if (body.error) 
       {
         callback('unable to find location', undefined)

       } else 
       {
        callback(undefined, body.current.weather_descriptions[0] + '. it is currently '+body.current.temperature +' degrees out. but it feels like '+body.current.feelslike+ ' degrees out'
           )
         }
  })
}


module.exports = forecast