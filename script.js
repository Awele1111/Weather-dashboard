// var apiKEY = "e7d5a843977321a1d1f3535a3019c762"

// var geoAPI = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid="+apiKEY

// fetch(geoAPI)
//     .then (function (response) {
//         if (response.ok) {
//             console.log(response);
//         response.json().then(function (data) {
//             console.log(data);
//             var lat = data[0].lat
//             var lon = data[0].lon
//             console.log(lat,lon);

//            var baseURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat +'&lon='+lon +'&appid=' + apiKEY
//         return baseURL
//         } ) .then (function (response) {
//             console.log(response);
//          fetch(response) 
//          .then (function (response) {
//             if (response.ok) {
//                 console.log(response);
//             response.json().then(function (data) {
//                 console.log(data);
//             }) 
//             }}
//          )
//         })
//     }
    // })


//     function GetInfo() {
//         const newName = document.getElementById('cityInput');
//         const cityName = document.getElementById('cityName');
//         cityName.innerHTML = '--'+ newName.value+'--'
    

//     fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=e7d5a843977321a1d1f3535a3019c762')
//     .then (response => response.json())
//     .then(data => {
//         for(i=0; i<5; i++) {
//             document.getElementById('day' +(i+1)+'Min').innerHTML='Min:'+Number(data.list[i].main.temp_min-279.76).toFixed(1)+'°';
//         }
//         for(i=0; i<5; i++) {
//             document.getElementById('day' +(i+1)+'Max').innerHTML='Max:'+Number(data.list[i].main.temp_max-279.76).toFixed(1)+'°';
//         }
//         for(i=0; i<5; i++) {
//             document.getElementById('img' + (i +1)).src='https://openweathermap.org/img/wn' + data.list[i].weather[0].icon+'.png';
//         }
//     })
//     .catch(err => alert('something is wrong'))
// }
// function defaultScreen(){
//     document.getElementById('cityInput').defaultValue ='london'
//     GetInfo();

// }

// const d = new Date();
// const weekday = 

// function checkDay(day) {
//     if(day +d.getDay() > 6){
//         return day +d.getDay()-7
// }
//     else{
//         return day +d.getDay();
//     }

// }
// for(i=0; i<5; i++) {
//     document.getElementById('day'+(i+1)).innerHTML = weekday[checkDay(i)]
// }


// var timeEl = document.getElementById('time');
// var dateEl = document.getElementById('date');
// var currentWeatherItemsEl = document.getElementById('current-weather-items');
// var timezone = document.getElementById('time-zone');
// var countryEl = document.getElementById('country');
// var weatherForecastEl = document.getElementById('weather-forecast');
// var currentTempEl = document.getElementById('current');
// var searchbtn = document.getElementById('search-btn')

// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var months =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// var API_KEY = 'e7d5a843977321a1d1f3535a3019c762'
// setInterval(() => {
//     var time = new Date();
//     var month = time.getMonth();
//     var date = time.getDate();
//     var day = time.getDay();
//     var hour = time.getHours();
//     var hoursIn12HrFormat = hour >= 13 ? hours %12: hour
//     var minutes = time.getMinutes();
//     var ampm = hour >=12 ? 'PM' : 'AM'


//     timeEl.innerHTML = hoursIn12HrFormat + ':' + minutes+ '' + `<span id="am-pm">${ampm}</span>`

//     dateEl.innerHTML = days[day] + ',' + date+ '' + months[month]

// }, 1000);

// getWeatherData ()
// function getWeatherData () {
//     navigator.geolocation.getCurrentPosition((success) => {
//         console.log(success);

//         var {latitude, longitude} = success.coords;

//         fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_KEY}`)
//         .then(res =>res.json()).then(data => {
            
//             console.log(data)
//             showWeatherData(data)
//         })

//     })
// }

// function singleDayForecast(event) {
//     event.preventDefault()
//     var cityName = document.getElementById('current-weather-items').value;
//     var baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
//     fetch(baseURL).then(res => res.json()).then(data => {
//         console.log(data);
//         document.getElementById('current-temp').innerHTML =`temp - ${data.main.temp}`
//         document.getElementById('wind-speed').innerHTML =`windSpeed - ${data.wind.speed}`

//         forecastData(cityName);
//     })
// }

// function forecastData(cityName) {
//     var baseURL =`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
//     fetch(baseURL).then(res => res.json()).then(data => {
//         console.log(data);
//     })

// }

// function showWeatherData(data){
//     var {humidity, pressure, sunrise, sunset, wind_speed} = data.current;
    
       
    
//     currentWeatherItemsEl.innerHTML = 
//     `<div class="weather-item">
//                 <div>Humidity</div>
//                 <div>${humidity}</div>
//     </div>
//     <div class="weather-item">
//             <div>Pressure</div>
//             <div>${pressure}</div>
//     </div>
//     <div class="weather-item">
//             <div>Wind speed</div>
//             <div>${wind_speed}</div>
//     </div>
//     <div class="weather-item">
//              <div>Sunrise</div>
//             <div>${sunrise}</div>
//     </div>
//     <div class="weather-item">
//         <div>Sunset</div>
//         <div>${sunset}</div>
//     </div>`;

//     let otherDayForecast = ''
//     data.daily.forEach((day, idx) => {
//         if (idx == 0) {
//             currentTempEl.innerHTML = `
//             <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png" 
//             alt="weather icon" class="w-icon">
//             <div class="other">
//                 <div class="day">${window.moment(day.date*1000).format('ddd')}</div>
//                 <div class="temp">Night - ${day.temp.night}° C</div>
//                 <div class="temp">Day - ${day.temp.day}° C</div>
//             </div>`
//         } else{
//             otherDayForecast +=
//             `<div class="weather-forecast-item">
//                 <div class="day">${window.moment(day.date*1000).format('ddd')}</div>
//                 <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
//                 <div class="temp">Night - ${day.temp.night} °C</div>
//                 <div class="temp">Day - ${day.temp.day}° C</div>
//             </div>`
//         }
                        
//     })
//     weatherForecastEl.innerHTML =  otherDayForecast                              
// }

// searchbtn.addEventListener('click', singleDayForecast)

// var favList = JSON.parse(localStorage.getItem("favCities")) || [];
// var openMapsApiK = "c4569ddf88609f987ce3eae232bd2c96";
// var access_token = "pk.eyJ1IjoiZG1hbmFnbGlhIiwiYSI6ImNsZHRtMzE0ZjFxdDAzcHA2MWh2ZjRwOG4ifQ.a6vf0lK-YsPOBxknrJMJSA";
// //location object that hold all necessary information of a given city
// function Location (cityName, lat, lon, state, country){
//     this.cityName = cityName,
//     this.lat = lat,
//     this.lon = lon
//     this.state = state,
//     this.country = country
// }
// //simple function that retrieves a specific emoji based on the weather id
// function getIcon(id, hour) {
//     if(id > 199 && id < 300){
//         return "🌩️";
//     } else if (id > 299 && id < 600) {
//         return "🌧️";
//     } else if (id > 599 && id < 700) {
//         return "❄️";
//     } else if (id > 699 && id < 800) {
//         return "🌫️";
//     } else if (id === 800) {
//         if(hour > 4 && hour < 19){
//             return "☀️";
//         }else {
//             return "🌖";
//         }
//     } else {
//         return "☁️";
//     }
// }
// //main functionality of the page, takes in a location object and updates page elements to display the weather information
// function printData(locationObj){
//     var currentUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + locationObj.lat + "&lon=" + locationObj.lon + "&units=imperial&APPID=" + openMapsApiK;
//     var forcastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + locationObj.lat + "&lon=" + locationObj.lon + "&units=imperial&APPID=" + openMapsApiK;
//     //fetch for current weather of the city
//     fetch(currentUrl)
//     .then(function(response){
//         if(response.status !== 404){
//             return response.json();
//         }else {
//             alert("City was not found.");
//         }
//     })
//     .then(function(data){
//         //stops the loading spinner and updates elements
//         $("#spinner-current").remove();
//         $("#current-city-h1").text(locationObj.cityName + ", " + locationObj.state + ", " + locationObj.country + " " + getIcon(data.weather[0].id, dayjs().$H));
//         $("#current-temp").text(data.main.temp);
//         $("#current-wind").text(data.wind.speed);
//         $("#current-humidity").text(data.main.humidity);
//         //checks to see if the current city is already in the favorite city list
//         var found = false;
//         for(var i = 0; i < favList.length; i++){
//             if(favList[i].lat === locationObj.lat && favList[i].lon === locationObj.lon){
//                 found = true;
//             }
//         }
//         //if its not then also creates a new button element and updates the favorite elements list
//         if(!found){
//             var addFavEl = $("<button>");
//             addFavEl.text(locationObj.cityName + ", " + locationObj.state);
//             addFavEl.attr("class", "btn btn-secondary city-btn");
//             addFavEl.attr("data-city", locationObj.lat + "_" + locationObj.lon);
//             var deleteEL = $("<p>");
//             deleteEL.text("X");
//             deleteEL.attr("class", "remove-city");
//             deleteEL.attr("data-city", locationObj.lat + "_" + locationObj.lon);
//             addFavEl.append(deleteEL);
//             $("#city-favs").append(addFavEl);
//             favList.push(locationObj);
//             localStorage.setItem("favCities", JSON.stringify(favList));
//         }

//     })
//     //fetch for the forcasted weather of the city
//     fetch(forcastUrl)
//     .then(function(response){
//         if(response.status !== 404){
//             return response.json();
//         }
//     })
//     .then(function(data){
//         //removes all the spinners from each card
//         for(var i = 1; i < 6; i++){
//             $("#spinner-future"+i).remove();
//         }
//         //gets the current time in unix format and adds 86400 (amount of time in a day in unix format)
//         var tomorrow = dayjs().unix() + 86400;
//         var daysAhead = 1; //acts as an index for the forcast
//         var daysAdded = 0;
//         for(var i = 0; i<data.list.length; i++){
//             //creates a string in the same time format as dt_txt inside data
//             //I only want the forcast once per day at noon for the next 5 days
//             var dateStr = dayjs.unix(tomorrow).format("YYYY-MM-DD") + " 12:00:00";
//             if(data.list[i].dt_txt === dateStr){ //once it finds tomorrows forcast at noon it updates the elements
//                 $("#future-day" + daysAhead).text(dayjs.unix(tomorrow).format("ddd M/D"));
//                 $("#future-day" + daysAhead + "-icon").text(getIcon(data.list[i].weather[0].id, 12));
//                 $("#future-day" + daysAhead + "-temp").text(data.list[i].main.temp);
//                 $("#future-day" + daysAhead + "-wind").text(data.list[i].wind.speed);
//                 $("#future-day" + daysAhead + "-humidity").text(data.list[i].main.humidity);
//                 //updates tomorrow variable to the day after
//                 tomorrow += 86400;
//                 //increases forcast index and count
//                 daysAhead ++;
//                 daysAdded ++;
//             }
//             //only happens from 12am - 6am every day when forcast list runs out of data to reach noon in 5 days
//             //if so sets the 5th and final forcast info card to the last index in the forcast list (earliest it can be is 6:00 am in 5 days)
//             if(i === data.list.length-1 && daysAdded === 4){ 
//                 $("#future-day5").text(dayjs.unix(tomorrow).format("ddd M/D"));
//                 $("#future-day5-icon").text(getIcon(data.list[i].weather[0].id, 12));
//                 $("#future-day5-temp").text(data.list[i].main.temp);
//                 $("#future-day5-wind").text(data.list[i].wind.speed);
//                 $("#future-day5-humidity").text(data.list[i].main.humidity);
//             }
//         }        
//     })
// }
// //event listener that will retrive the data-city custom attribute of the city button and find the Location obj with matching coords. in favList local variable
// $("#city-favs").on("click", ".city-btn", function(event){
//     if($(event.target).attr("class") !== "remove-city"){ //ensures that the user didnt click the remove button. if they did the data wont be displayed
//         var cityCords = $(event.target).attr("data-city");
//         for(var i = 0; i < favList.length; i++){
//             if(cityCords === favList[i].lat + "_" + favList[i].lon){
//                 addSpinners(); //adds spinners then prints data
//                 printData(favList[i]);
//             }
//         }
//     }
// })
//event listener for the p tag on the each city button that acts like a remove button
//same process as above it gets the custom attribute and find the location object in the local variable 'cityFavs' and removes that location obj
// $("#city-favs").on("click", ".remove-city", function(event){
//     var cityCords = $(event.target).attr("data-city");
//     for(var i = 0; i < favList.length; i++) {
//         if(cityCords === favList[i].lat + "_" + favList[i].lon) {
//             favList.splice(i, 1);
//         }
//     }
//     localStorage.setItem("favCities", JSON.stringify(favList));
//     loadFavs(); //once it is found and removed the list will reload
// })
// //event listener for the search city input element. Fires any time a key is pressed 
// $("#search-txt").on("keyup", function(event){
//     //passes the new string to the geocoding API
//     fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/" + $(event.target).val() + ".json?limit=5&types=place%2Cpostcode%2Clocality%2Cneighborhood&language=en-US&access_token=" + access_token)
//     .then(function(response){
//         if(response.ok){
//             return response.json();
//         }
//     })
//     .then(function(data){
//         if(data.features){ //makes sure the expected data exists 
//             var availableTags = [];//will be passed to the autocomplete for reference
//             var locations = [];//will hold location objects with all necessary info
//             //fetch will give a list of 5 cities that resemble the search text. this gets the necessary data for each city returned
//             for(var i = 0; i < data.features.length; i++){
//                 var placeInfo = data.features[i].place_name.split(",");
//                 if(placeInfo[0] && placeInfo[1] && placeInfo[2]) {
//                     var city = placeInfo[0].trim();
//                     var state = placeInfo[1].trim();
//                     var country = placeInfo[2].trim();
//                     availableTags.push(data.features[i].place_name);
//                     locations.push(new Location(city, data.features[i].geometry.coordinates[1], data.features[i].geometry.coordinates[0], state, country));
//                 }
//             }
//             //creates a new autocomplete
//             $("#search-txt").autocomplete({
//                 minLength: 1,
//                 source: availableTags,
//                 select: function(event, ui) {
//                     var tagInfo = ui.item.label.split(",");
//                     var city = tagInfo[0].trim();
//                     var state = tagInfo[1].trim();
//                     var country = tagInfo[2].trim();
//                     for(var i = 0; i < locations.length; i++){//once a selection is made it find the matching selection in the list of location objs
//                         if(city === locations[i].cityName && state === locations[i].state && country === locations[i].country){
//                             addSpinners(); //starts the spinners
//                             printData(locations[i]); //calls printData function with the selected location object
//                             $(this).val(''); //resets the input element to an empty string
//                             return false; //prevents the automplete from actually filling in the input element
//                         }
//                     }
//                 }
//             });
//         }
//     })
// });
// //simple function that resets any information on the page to empty and creates spinners while the code waits for the fetch response
// function addSpinners(){
//     $("#current-city-h1").text("");
//     $("#current-temp").text("--");
//     $("#current-wind").text("--");
//     $("#current-humidity").text("--");
//     var spinner = $("<div>");
//     spinner.attr("class", "spinner-border");
//     spinner.attr("role", "status");
//     spinner.attr("id", "spinner-current");
//     $("#current-place").prepend(spinner);
//     for(var i = 1; i < 6; i++){
//         $("#future-day"+i).text("");
//         $("#future-day"+i+"-icon").text("--");
//         $("#future-day"+i+"-temp").text("--");
//         $("#future-day"+i+"-wind").text("--");
//         $("#future-day"+i+"-humidity").text("--");
//         var spinner = $("<div>");
//         spinner.attr("class", "spinner-border");
//         spinner.attr("role", "status");
//         spinner.attr("id", "spinner-future"+i);
//         $("#card"+i).prepend(spinner);
//     }
// }
// //simple function that clears the favorite cities list then creates a new button for every location object in the local storage variable 'favList'
// function loadFavs(){
//     $("#city-favs").empty();
//     for(var i = 0; i < favList.length; i++){
//         var addFavEl = $("<button>");
//         addFavEl.text(favList[i].cityName + ", " + favList[i].state);
//         addFavEl.attr("class", "btn btn-secondary city-btn");
//         addFavEl.attr("data-city", favList[i].lat + "_" + favList[i].lon);
//         var deleteEL = $("<p>");
//         deleteEL.text("X");
//         deleteEL.attr("class", "remove-city");
//         deleteEL.attr("data-city", favList[i].lat + "_" + favList[i].lon);
//         addFavEl.append(deleteEL);
//         $("#city-favs").append(addFavEl);
//     }
// }
// //program starts by loading any favorite city buttons to the webpage if the user already has any location objects in storage
// loadFavs();

// const apikey="e7d5a843977321a1d1f3535a3019c762";
// window.addEventListener("load",()=>{
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition((position)=>{
//             let lon= position.coords.longitude;
//             let lat= position.coords.latitude;
//             const url= `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${apikey}`;
            

//             fetch(url).then((res)=>{
//                 return res.json();
//             }).then((data)=>{
//                 console.log(data);
//                 console.log(new Date().getTime())
//                 var dat= new Date(data.dt)
//                 console.log(dat.toLocaleString(undefined,'Asia/Kolkata'))
//                 console.log(new Date().getMinutes())
//                 weatherReport(data);
//             })
//         })
//     }
// })


// function searchByCity(){
//     var place= document.getElementById('input').value;
//     var urlsearch= `http://api.openweathermap.org/data/2.5/weather?q=${place}&` + `appid=${apikey}`;

//     fetch(urlsearch).then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         console.log(data);
//         weatherReport(data);
//     })
//     document.getElementById('input').value='';
// }

// function weatherReport(data){

//     var urlcast= `http://api.openweathermap.org/data/2.5/forecast?q=${data.name}&` + `appid=${apikey}`;

//     fetch(urlcast).then((res)=>{
//         return res.json();
//     }).then((forecast)=>{
//         console.log(forecast.city);
//         hourForecast(forecast);
//         dayForecast(forecast)

//         console.log(data);
//         document.getElementById('city').innerText= data.name + ', '+data.sys.country;
//         console.log(data.name,data.sys.country);
    
//         console.log(Math.floor(data.main.temp-273));
//         document.getElementById('temperature').innerText= Math.floor(data.main.temp-273)+ ' °C';
    
//         document.getElementById('clouds').innerText= data.weather[0].description;
//         console.log(data.weather[0].description)
        
//         let icon1= data.weather[0].icon;
//         let iconurl= "http://api.openweathermap.org/img/w/"+ icon1 +".png";
//         document.getElementById('img').src=iconurl
//     })

// }

// function hourForecast(forecast){
//     document.querySelector('.templist').innerHTML=''
//     for (let i = 0; i < 5; i++) {

//         var date= new Date(forecast.list[i].dt*1000)
//         console.log((date.toLocaleTimeString(undefined,'Asia/Kolkata')).replace(':00',''))

//         let hourR=document.createElement('div');
//         hourR.setAttribute('class','next');

//         let div= document.createElement('div');
//         let time= document.createElement('p');
//         time.setAttribute('class','time')
//         time.innerText= (date.toLocaleTimeString(undefined,'Asia/Kolkata')).replace(':00','');

//         let temp= document.createElement('p');
//         temp.innerText= Math.floor((forecast.list[i].main.temp_max - 273))+ ' °C' + ' / ' + Math.floor((forecast.list[i].main.temp_min - 273))+ ' °C';

//         div.appendChild(time)
//         div.appendChild(temp)

//         let desc= document.createElement('p');
//         desc.setAttribute('class','desc')
//         desc.innerText= forecast.list[i].weather[0].description;

//         hourR.appendChild(div);
//         hourR.appendChild(desc)
//         document.querySelector('.templist').appendChild(hourR);
// }
// }

// function dayForecast(forecast){
//     document.querySelector('.weekF').innerHTML=''
//     for (let i = 8; i < forecast.list.length; i+=8) {
//         console.log(forecast.list[i]);
//         let div= document.createElement('div');
//         div.setAttribute('class','dayF');
        
//         let day= document.createElement('p');
//         day.setAttribute('class','date')
//         day.innerText= new Date(forecast.list[i].dt*1000).toDateString(undefined,'Asia/Kolkata');
//         div.appendChild(day);

//         let temp= document.createElement('p');
//         temp.innerText= Math.floor((forecast.list[i].main.temp_max - 273))+ ' °C' + ' / ' + Math.floor((forecast.list[i].main.temp_min - 273))+ ' °C';
//         div.appendChild(temp)

//         let description= document.createElement('p');
//         description.setAttribute('class','desc')
//         description.innerText= forecast.list[i].weather[0].description;
//         div.appendChild(description);

//         document.querySelector('.weekF').appendChild(div)
//     }
// } 



//Declare a variable to store the searched city
var city="";
// variable declaration
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");
var sCity=[];
// searches the city to see if it exists in the entries from the storage
function find(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}
//Set up the API key
// let APIKey="d1d1c7bcb9ef6d0effd63fca0dd08d01";
var APIKey = "e7d5a843977321a1d1f3535a3019c762"
// Display the curent and future weather to the user after grabing the city form the input text box.
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}
// Here we create the AJAX call
function currentWeather(city){
    // Here we build the URL so we can get a data from server side.
    var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){

        // parse the response to display the current weather including the City name. the Date and the weather icon. 
        console.log(response);
        //Data object from server side Api for icon property.
        var weathericon= response.weather[0].icon;
        var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";
        // The date format method is taken from the  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
        var date=new Date(response.dt*1000).toLocaleDateString();
        //parse the response for name of city and concanatig the date and icon.
        $(currentCity).html(response.name +"("+date+")" + "<img src="+iconurl+">");
        // parse the response to display the current temperature.
        // Convert the temp to fahrenheit

        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        $(currentTemperature).html((tempF).toFixed(2)+"&#8457");
        // Display the Humidity
        $(currentHumidty).html(response.main.humidity+"%");
        //Display Wind speed and convert to MPH
        var ws=response.wind.speed;
        var windsmph=(ws*2.237).toFixed(1);
        $(currentWSpeed).html(windsmph+"MPH");
        // Display UVIndex.
        //By Geographic coordinates method and using appid and coordinates as a parameter we are going build our uv query url inside the function below.
        UVIndex(response.coord.lon,response.coord.lat);
        forecast(response.id);
        if(response.cod==200){
            sCity=JSON.parse(localStorage.getItem("cityname"));
            console.log(sCity);
            if (sCity==null){
                sCity=[];
                sCity.push(city.toUpperCase()
                );
                localStorage.setItem("cityname",JSON.stringify(sCity));
                addToList(city);
            }
            else {
                if(find(city)>0){
                    sCity.push(city.toUpperCase());
                    localStorage.setItem("cityname",JSON.stringify(sCity));
                    addToList(city);
                }
            }
        }

    });
}
    // This function returns the UVIindex response.
function UVIndex(ln,lt){
    //lets build the url for uvindex.
    var uvqURL="https://api.openweathermap.org/data/2.5/uvi?appid="+ APIKey+"&lat="+lt+"&lon="+ln;
    $.ajax({
            url:uvqURL,
            method:"GET"
            }).then(function(response){
                $(currentUvindex).html(response.value);
            });
}
    
// Here we display the 5 days forecast for the current city.
function forecast(cityid){
    var dayover= false;
    var queryforcastURL="https://api.openweathermap.org/data/2.5/forecast?id="+cityid+"&appid="+APIKey;
    $.ajax({
        url:queryforcastURL,
        method:"GET"
    }).then(function(response){
        
        for (i=0;i<5;i++){
            const date= new Date((response.list[((i+1)*8)-1].dt)*1000).toLocaleDateString();
            const iconcode= response.list[((i+1)*8)-1].weather[0].icon;
            const iconurl="https://openweathermap.org/img/wn/"+iconcode+".png";
            const tempK= response.list[((i+1)*8)-1].main.temp;
            const tempF=(((tempK-273.5)*1.80)+32).toFixed(2);
            const humidity= response.list[((i+1)*8)-1].main.humidity;
        
            $("#fDate"+i).html(date);
            $("#fImg"+i).html("<img src="+iconurl+">");
            $("#fTemp"+i).html(tempF+"&#8457");
            $("#fHumidity"+i).html(humidity+"%");
        }
        
    });
}

//Daynamically add the passed city on the search history
function addToList(c){
    var listEl= $("<li>"+c.toUpperCase()+"</li>");
    $(listEl).attr("class","list-group-item");
    $(listEl).attr("data-value",c.toUpperCase());
    $(".list-group").append(listEl);
}
// display the past search again when the list group item is clicked in search history
function invokePastSearch(event){
    var liEl=event.target;
    if (event.target.matches("li")){
        city=liEl.textContent.trim();
        currentWeather(city);
    }

}

// render function
function loadlastCity(){
    $("ul").empty();
    var sCity = JSON.parse(localStorage.getItem("cityname"));
    if(sCity!==null){
        sCity=JSON.parse(localStorage.getItem("cityname"));
        for(i=0; i<sCity.length;i++){
            addToList(sCity[i]);
        }
        city=sCity[i-1];
        currentWeather(city);
    }

}
//Clear the search history from the page
function clearHistory(event){
    event.preventDefault();
    sCity=[];
    localStorage.removeItem("cityname");
    document.location.reload();

}
//Click Handlers
$("#search-button").on("click",displayWeather);
$(document).on("click",invokePastSearch);
$(window).on("load",loadlastCity);
$("#clear-history").on("click",clearHistory);





















