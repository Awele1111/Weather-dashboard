var apiKEY = "e7d5a843977321a1d1f3535a3019c762"

var geoAPI = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid="+apiKEY

fetch(geoAPI)
    .then (function (response) {
        if (response.ok) {
            console.log(response);
        response.json().then(function (data) {
            console.log(data);
            var lat = data[0].lat
            var lon = data[0].lon
            console.log(lat,lon);

           var baseURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat +'&lon='+lon +'&appid=' + apiKEY
        return baseURL
        } ) .then (function (response) {
            console.log(response);
         fetch(response) 
         .then (function (response) {
            if (response.ok) {
                console.log(response);
            response.json().then(function (data) {
                console.log(data);
            }) 
            }}
         )
        })
    }
    })