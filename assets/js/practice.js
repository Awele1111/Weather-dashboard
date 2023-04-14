
// var location="";
// var searchLocation = $("#search-city");
// var searchButton = $("#search-button");
// var removeHistory = $("#clear-history");
// var currentLocation = $("#current-city");
// var currentTemp = $("#temperature");
// var currentHumidty= $("#humidity");
// var WindSpeed=$("#wind-speed");
// var Uvindex= $("#uv-index");
// var sLocation=[];

// function find(c){
//     for (var i=0; i<sLocation.length; i++){
//         if(c.toUpperCase()===sLocation[i]){
//             return -1;
//         }
//     }
//     return 1;
// }


// var API_Key = "e7d5a843977321a1d1f3535a3019c762"

// function displayWeather(event){
//     event.preventDefault();
//     if(searchLocation.val().trim()!==""){
//         city=searchLocation.val().trim();
//         currentWeather(city);
//     }
// }

// function currentWeather(city){
//     // Here we build the URL so we can get a data from server side.
//     var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + API_Key;
//     $.ajax({
//         url:queryURL,
//         method:"GET",
//     }).then(function(response){

//         // parse the response to display the current weather including the City name. the Date and the weather icon. 
//         console.log(response);
//         //Data object from server side Api for icon property.
//         var weathericon= response.weather[0].icon;
//         var iconurl="https://openweathermap.org/img/wn/"+weathericon +"@2x.png";
//         // The date format method is taken from the  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//         var date=new Date(response.dt*1000).toLocaleDateString();
//         //parse the response for name of city and concanatig the date and icon.
//         $(currentLocation).html(response.name +"("+date+")" + "<img src="+iconurl+">");
//         // parse the response to display the current temperature.
//         // Convert the temp to fahrenheit

//         var tempF = (response.main.temp - 273.15) * 1.80 + 32;
//         $(currentTemperature).html((tempF).toFixed(2)+"&#8457");
//         // Display the Humidity
//         $(currentHumidty).html(response.main.humidity+"%");
//         //Display Wind speed and convert to MPH
//         var ws=response.wind.speed;
//         var windsmph=(ws*2.237).toFixed(1);
//         $(currentWSpeed).html(windsmph+"MPH");
//         // Display UVIndex.
//         //By Geographic coordinates method and using appid and coordinates as a parameter we are going build our uv query url inside the function below.
//         UVIndex(response.coord.lon,response.coord.lat);
//         forecast(response.id);
//         if(response.cod==200){
//             sLocation=JSON.parse(localStorage.getItem("cityname"));
//             console.log(sCity);
//             if (sLocation==null){
//                 sLocation=[];
//                 sLocation.push(location.toUpperCase()
//                 );
//                 localStorage.setItem("cityname",JSON.stringify(sCity));
//                 addToList(city);
//             }
//             else {
//                 if(find(location)>0){
//                     sLocation.push(location.toUpperCase());
//                     localStorage.setItem("cityname",JSON.stringify(sLocation));
//                     addToList(location);
//                 }
//             }
//         }

//     });
// }
//     // This function returns the UVIindex response.
// function UVIndex(ln,lt){
//     //lets build the url for uvindex.
//     var uvqURL="https://api.openweathermap.org/data/2.5/uvi?appid="+ API_Key+"&lat="+lt+"&lon="+ln;
//     $.ajax({
//             url:uvqURL,
//             method:"GET"
//             }).then(function(response){
//                 $(currentUvindex).html(response.value);
//             });
// }
    
// // Here we display the 5 days forecast for the current city.
// function forecast(cityid){
//     var dayover= false;
//     var queryforcastURL="https://api.openweathermap.org/data/2.5/forecast?id="+cityid+"&appid="+API_Key;
//     $.ajax({
//         url:queryforcastURL,
//         method:"GET"
//     }).then(function(response){
        
//         for (i=0;i<5;i++){
//             const date= new Date((response.list[((i+1)*8)-1].dt)*1000).toLocaleDateString();
//             const iconcode= response.list[((i+1)*8)-1].weather[0].icon;
//             const iconurl="https://openweathermap.org/img/wn/"+iconcode+".png";
//             const tempK= response.list[((i+1)*8)-1].main.temp;
//             const tempF=(((tempK-273.5)*1.80)+32).toFixed(2);
//             const humidity= response.list[((i+1)*8)-1].main.humidity;
        
//             $("#fDate"+i).html(date);
//             $("#fImg"+i).html("<img src="+iconurl+">");
//             $("#fTemp"+i).html(tempF+"&#8457");
//             $("#fHumidity"+i).html(humidity+"%");
//         }
        
//     });
// }

// function addToList(c){
//     var listEl= $("<li>"+c.toUpperCase()+"</li>");
//     $(listEl).attr("class","list-group-item");
//     $(listEl).attr("data-value",c.toUpperCase());
//     $(".list-group").append(listEl);
// }

// function invokePastSearch(event){
//     var liEl=event.target;
//     if (event.target.matches("li")){
//         city=liEl.textContent.trim();
//         currentWeather(city);
//     }

// }


// function loadlastCity(){
//     $("ul").empty();
//     var sLocation = JSON.parse(localStorage.getItem("cityname"));
//     if(sLocation!==null){
//         sLocation=JSON.parse(localStorage.getItem("cityname"));
//         for(i=0; i<sCity.length;i++){
//             addToList(sCity[i]);
//         }
//         location=sLocation[i-1];
//         currentWeather(location);
//     }

// }

// function clearHistory(event){
//     event.preventDefault();
//     sLocation=[];
//     localStorage.removeItem("cityname");
//     document.location.reload();

// }

// $("#search-button").on("click",displayWeather);
// $(document).on("click",invokePastSearch);
// $(window).on("load",loadlastCity);
// $("#clear-history").on("click",clearHistory);







// function addResult(){

//     inputCity = document.getElementById("myInput").value;  
//     historyList = getInfo();
//     var searchCity =$("<div>") 
//     searchCity.attr('id',inputCity) 
//     searchCity.text(inputCity) 
//     searchCity.addClass("h4")

    
//     if (historyList.includes(inputCity) === false){
//         $(".history").append(searchCity)
//     }
//     $(".subtitle").attr("style","display:inline")
//     addInfo(inputCity);
    
// }; 

// //add event listener to search history item
// $(".history").on('click', function(event){
//     event.preventDefault();
//     $(".subtitle").attr("style","display:inline")
//      document.getElementById("myInput").value =  event.target.id;
//     getResult(); 
// });

// //add event listner to search button
// document.getElementById("searchBtn").addEventListener("click", addResult);
// document.getElementById("searchBtn").addEventListener('click', getResult);

// // WHEN I view current weather conditions for that city
// // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// function getResult(){   

//     $(".five-day").empty();
//     $(".city").empty()

//    inputCity = document.getElementById("myInput").value;   
//     var countryCode='US';    
//     var cityCode=inputCity;       
    
//     var geoLon;   
//     var geoLat;
        
//     var cityName =$("<h>")    
//     cityName.addClass("h3")  
//     var temp = $("<div>")    
//     var wind = $("<div>")    
//     var humidity = $("<div>")   
//     var uvIndex = $("<div>")  
//     var icon =$("<img>")
//     icon.addClass("icon");    
//     var dateTime = $("<div>")

//     $(".city").addClass("list-group")
//     $(".city").append(cityName)    
//     $(".city").append(dateTime)    
//     $(".city").append(icon)    
//     $(".city").append(temp)    
//     $(".city").append(wind)    
//     $(".city").append(humidity)    
//     $(".city").append(uvIndex)
    
    
//     var geoUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityCode + "," + countryCode + "&limit=5&appid=7d1b285353ccacd5326159e04cfab063"
        
//     //We then pass the requestUrl variable as an argument to the fetch() method, like in the following code:    
//       fetch(geoUrl)
    
//         //Convert the response into JSON. Lastly, we return the JSON-formatted response, as follows:
//         .then(function (response) {
//           return response.json();
//         })
    
//         .then(function (data) {
//           geoLon = data[0].lon;
//           geoLat = data[0].lat;
    
//           //use geoLat and geoLon to fetch the current weather
//           var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + geoLat + "&lon="+ geoLon + "&exclude=minutely,hourly,alerts&units=imperial&appid=7d1b285353ccacd5326159e04cfab063";
            
//           fetch(weatherUrl)

//           .then(function (response) {
//             return response.json();
//           })
//           .then(function (data) {
//             // console.log(data)
            
//             weatherIcon= data.current.weather[0].icon;
//             imgSrc = "https://openweathermap.org/img/wn/" + weatherIcon + ".png";
//             icon.attr('src',imgSrc)
        
//             cityName.text(cityCode);
//             //translate utc to date
//             var date = new Date(data.current.dt * 1000);
//             dateTime.text("("+ (date.getMonth()+1) + "/" + date.getDate() + "/" + date.getFullYear() + ")");

//             temp.text("Temperature: "+ data.current.temp + " F");
//             humidity.text("Humidity: " + data.current.humidity + " %");
//             wind.text("Wind Speed: " + data.current.wind_speed + " MPH");

//             // WHEN I view the UV index
//             // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe    
//             var uvi =$("<div>")
//             uvIndex.text("UV Index: ");
//             uvi.text(data.current.uvi)
//             uvIndex.append(uvi)
//             uvIndex.addClass("d-flex")
            
//             if (data.current.uvi < 3){
//                 uvi.attr("style","background-color:green; color:black; margin-left: 5px")
//             } else if (data.current.uvi < 6){
//                 uvi.attr("style","background-color:yellow; color:black; margin-left: 5px")
//             } else if (data.current.uvi < 8){
//                 uvi.attr("style","background-color:orange; color:black; margin-left: 5px")
//             } else if (data.current.uvi < 11) {
//                 uvi.attr("style","background-color:red; color:black; margin-left: 5px")
//             } else {
//                 uvi.attr("style","background-color:purple; color:black; margin-left: 5px")
//             }

//             // WHEN I view future weather conditions for that city
//             // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
//             //using the data from previous fetch and display the 5 day weather data
//             for (var i=1;i<6;i++){

//                 var blueContainer = $("<div>")
//                 this["futureDate"+i] = $("<h>")
//                 this["futureIcon"+i] = $("<img>")
//                 this["futureTemp"+i] = $("<div>")
//                 this["futureWind"+i] = $("<div>")
//                 this["futureHumidity"+i] = $("<div>")
//                 //translate utc to date
//                 this["forecastDay"+i] = new Date(data.daily[i].dt * 1000);     
     
//                 (this["futureDate"+i]).text(((this["forecastDay"+i]).getMonth()+1) + "/" + (this["forecastDay"+i]).getDate() + "/" + (this["forecastDay"+i]).getFullYear());
//                 (this["futureTemp"+i]).text("Temperature: "+ data.daily[i].temp.day + " F");
//                 (this["futureWind"+i]).text("Wind: "+ data.daily[i].wind_speed+ " MPH");
//                 (this["futureHumidity"+i]).text("Humidity: " + data.daily[i].humidity + " %");
//                 (this["weatherIcon"+i])= data.daily[i].weather[0].icon;
        
//                 DateimgSrc = "https://openweathermap.org/img/wn/" + (this["weatherIcon"+i]) + ".png";  
//                 (this["futureIcon"+i]).attr('src',DateimgSrc)

//                 $(".five-day").append(blueContainer)
//                 blueContainer.append((this["futureDate"+i]));
//                 blueContainer.append((this["futureIcon"+i]));
//                 blueContainer.append((this["futureTemp"+i]));
//                 blueContainer.append((this["futureWind"+i]));
//                 blueContainer.append((this["futureHumidity"+i]));

//                 blueContainer.addClass("weather-card")
//             }

//           })
//     })
// }

// // WHEN I click on a city in the search history
// // THEN I am again presented with current and future conditions for that city

// //get local storage info
// function getInfo() {
//     var currentList =localStorage.getItem("city");
//     if (currentList !== null ){
//         freshList = JSON.parse(currentList);
//         return freshList;
//     } else {
//         freshList = [];
//     }
//     return freshList;
// }
// //add info to local
// function addInfo (n) {
//     var addedList = getInfo();

//     if (historyList.includes(inputCity) === false){
//         addedList.push(n);
//     }
   
//     localStorage.setItem("city", JSON.stringify(addedList));
// };
// //render history
// function renderInfo () {
//     var historyList = getInfo();
//     for (var i = 0; i < historyList.length; i++) {
//         var inputCity = historyList[i];
//         var searchCity =$("<div>") 
//         searchCity.attr('id',inputCity) 
//         searchCity.text(inputCity) 
//         searchCity.addClass("h4")

//         $(".history").append(searchCity)
//     }
// };

// renderInfo();

// const apiKey = "e7d5a843977321a1d1f3535a3019c762"; // replace with your OpenWeather API key

// const searchBtn = document.getElementById('searchBtn');
// const myInput = document.getElementById('myInput');
// const history = document.querySelector('.history');
// const city = document.querySelector('.city');
// const fiveDay = document.querySelector('.five-day');

// let searchHistory = [];

// // function to get the current weather data from API
// const getCurrentWeather = async (cityName) => {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('City not found');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // function to get the 5-day forecast data from API
// const getFiveDayForecast = async (cityName) => {
//   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error('City not found');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// // function to display the search history
// const displaySearchHistory = () => {
//   history.innerHTML = '';
//   searchHistory.forEach((city) => {
//     const btn = document.createElement('button');
//     btn.textContent = city;
//     btn.classList.add('history-btn');
//     btn.addEventListener('click', () => {
//       myInput.value = city;
//       searchWeather();
//     });
//     history.appendChild(btn);
//   });
// };

// // function to save the search history to local storage
// const saveSearchHistory = () => {
//   localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
// };

// // function to load the search history from local storage
// const loadSearchHistory = () => {
//   const searchHistoryString = localStorage.getItem('searchHistory');
//   if (searchHistoryString) {
//     searchHistory = JSON.parse(searchHistoryString);
//     displaySearchHistory();
//   }
// };

// // function to search for the weather of a city
// const searchWeather = async () => {
//   const cityName = myInput.value.trim();
//   if (cityName === '') {
//     return;
//   }
//   const currentWeather = await getCurrentWeather(cityName);
//   const fiveDayForecast = await getFiveDayForecast(cityName);
//   city.innerHTML = `
//     <h2>${currentWeather.name}, ${currentWeather.sys.country}</h2>
//     <p class="temp">${Math.round(currentWeather.main.temp)}°C</p>
//     <p class="desc">${currentWeather.weather[0].description}</p>
//     <p class="icon"><img src="https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png" alt="${currentWeather.weather[0].description}" /></p>
//     `;
//   fiveDay.innerHTML = '';
//   for (let i = 0; i < fiveDayForecast.list.length; i += 8) {
//     const forecast = fiveDayForecast.list[i];
//     const date = new Date(forecast.dt_txt);
//     const day = date.toLocaleDateString('en-US', { weekday: 'short' });
//     const temp = Math.round(forecast.main.temp);
//     const icon = forecast.weather[0].icon;
//     const desc = forecast.weather[0].description;

//   };
// }

// const API_KEY = 'e7d5a843977321a1d1f3535a3019c762';
// const searchHistory = [];

// // Function to search for weather data
// function searchWeather(city) {
//   const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
//   const fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
//   $('#myInput').val('');
  
//   $.ajax({
//     url: currentWeatherUrl,
//     method: 'GET'
//   }).then(function (currentData) {
//     $.ajax({
//       url: fiveDayForecastUrl,
//       method: 'GET'
//     }).then(function (forecastData) {
//       saveSearch(city);
//       displayCurrentWeather(currentData, forecastData);
//       displayFiveDayForecast(forecastData);
//     }).catch(function (error) {
//       console.log(error);
//     });
//   }).catch(function (error) {
//     console.log(error);
//     alert('City not found');
//   });
// }

// // Function to save search history
// function saveSearch(city) {
//   if (searchHistory.indexOf(city) === -1) {
//     searchHistory.unshift(city);
//     localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
//     displaySearchHistory();
//   }
// }

// // Function to display search history
// function displaySearchHistory() {
//   $('#search-history').empty();
//   for (let i = 0; i < searchHistory.length; i++) {
//     const searchItem = $('<li>').addClass('search-item list-group-item').text(searchHistory[i]);
//     $('#search-history').append(searchItem);
//   }
// }

// // Function to display current weather
// function displayCurrentWeather(currentData, forecastData) {
//   $('.city').empty();
//   const cityName = $('<h3>').text(currentData.name);
//   const currentIconUrl = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
//   const currentIcon = $('<img>').attr('src', currentIconUrl);
//   const currentTemp = $('<p>').text(`Temperature: ${currentData.main.temp}°C`);
//   const currentHumidity = $('<p>').text(`Humidity: ${currentData.main.humidity}%`);
//   const currentWindSpeed = $('<p>').text(`Wind Speed: ${currentData.wind.speed}m/s`);
//   const currentWeatherDetails = $('<div>').addClass('current-weather-details');
//   currentWeatherDetails.append(cityName, currentIcon, currentTemp, currentHumidity, currentWindSpeed);
//   $('.city').append(currentWeatherDetails);
// }

// // Function to display five day forecast
// function displayFiveDayForecast(forecastData) {
//   $('.five-day').empty();
//   for (let i = 0; i < forecastData.list.length; i++) {
//     if (forecastData.list[i].dt_txt.indexOf('12:00:00') !== -1) {
//       const forecastCard = $('<div>').addClass('card five-day-card');
//       const forecastDate = $('<h4>').text(moment(forecastData.list[i].dt_txt).format('MMM D, YYYY'));
//       const forecastIconUrl = `https://openweathermap.org/img/w/${forecastData.list[i].weather[0].icon}.png`;
//       const forecastIcon = $('<img>').attr('src', forecastIconUrl);
//       const forecastTemp = $('<p>').text(`Temperature: ${forecastData.list[i].main.temp}°C`);
//       const forecastHumidity = $('<p>').text(`Humidity: ${forecastData.list[i].main.humidity}%`);
//     }
//   }
// }

// const weatherIcon = document.querySelector('.weather-icon');

// if (weatherCondition === 'clear sky') {
//   weatherIcon.classList.add('fas', 'fa-sun');
// } else if (weatherCondition === 'few clouds' || weatherCondition === 'scattered clouds') {
//   weatherIcon.classList.add('fas', 'fa-cloud');
// } else if (weatherCondition === 'broken clouds' || weatherCondition === 'overcast clouds') {
//   weatherIcon.classList.add('fas', 'fa-clouds');
// } else if (weatherCondition === 'shower rain' || weatherCondition === 'rain') {
//   weatherIcon.classList.add('fas', 'fa-cloud-showers-heavy');
// } else if (weatherCondition === 'thunderstorm') {
//   weatherIcon.classList.add('fas', 'fa-bolt');
// } else if (weatherCondition === 'snow') {
//   weatherIcon.classList.add('fas', 'fa-snowflake');
// } else if (weatherCondition === 'mist' || weatherCondition === 'smoke' || weatherCondition === 'haze' || weatherCondition === 'dust' || weatherCondition === 'fog' || weatherCondition === 'sand' || weatherCondition === 'ash' || weatherCondition === 'squall' || weatherCondition === 'tornado') {
//   weatherIcon.classList.add('fas', 'fa-smog');
// }


// const searchHistory = [];

// // Function to search for weather data
// function searchWeather(city) {
//   const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
//   const fiveDayForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;
//   $('#myInput').val('');

//   $.ajax({
//     url: currentWeatherUrl,
//     method: 'GET'
//   }).then(function (currentData) {
//     $.ajax({
//       url: fiveDayForecastUrl,
//       method: 'GET'
//     }).then(function (forecastData) {
//       saveSearch(city);
//       displayCurrentWeather(currentData, forecastData);
//       displayFiveDayForecast(forecastData);
//     }).catch(function (error) {
//       console.log(error);
//     });
//   }).catch(function (error) {
//     console.log(error);
//     alert('City not found');
//   });
// }

// // Function to save search history
// function saveSearch(city) {
//   if (searchHistory.indexOf(city) === -1) {
//     searchHistory.unshift(city);
//     localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
//     displaySearchHistory();
//   }
// }

// // Function to display search history
// function displaySearchHistory() {
//   $('#search-history').empty();
//   for (let i = 0; i < searchHistory.length; i++) {
//     const searchItem = $('<li>').addClass('list-group-item search-item').text(searchHistory[i]);
//     $('#search-history').append(searchItem);
//   }
// }

// // Function to display current weather
// function displayCurrentWeather(currentData, forecastData) {
//   $('.city').empty();
//   const cityName = $('<h3>').text(currentData.name);
//   const currentIconUrl = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
//   const currentIcon = $('<img>').attr('src', currentIconUrl);
//   const currentTemp = $('<p>').text(`Temperature: ${currentData.main.temp}°C`);
//   const currentHumidity = $('<p>').text(`Humidity: ${currentData.main.humidity}%`);
//   const currentWindSpeed = $('<p>').text(`Wind Speed: ${currentData.wind.speed}m/s`);
//   const currentWeatherDetails = $('<div>').addClass('current-weather-details');
//   currentWeatherDetails.append(cityName, currentIcon, currentTemp, currentHumidity, currentWindSpeed);
//   $('.city').append(currentWeatherDetails);
  
//   const weatherIcon = $('.weather-icon');
//   const weatherCondition = currentData.weather[0].description.toLowerCase();

//   if (weatherCondition === 'clear sky') {
//     weatherIcon.addClass('fas fa-sun');
//   } else if (weatherCondition === 'few clouds' || weatherCondition === 'scattered clouds') {
//     weatherIcon.addClass('fas fa-cloud');
//   } else if (weatherCondition === 'broken clouds' || weatherCondition === 'overcast clouds') {
//     weatherIcon.addClass('fas fa-clouds');
//   } else if (weatherCondition === 'shower rain' || weatherCondition === 'rain') {
//     weatherIcon.addClass('fas fa-cloud-showers-heavy');
//   } else if (weatherCondition === 'thunderstorm') {
//     weatherIcon.addClass('fas fa-bolt');
//   } else if (weatherCondition === 'snow') {
//     weatherIcon.addClass('fas fa-snowflake');
//   } else if (weatherCondition === 'mist' || weatherCondition === 'haze' || weatherCondition === 'smoke' || weatherCondition === 'dust' || weatherCondition === 'fog') {
//     weatherIcon.addClass('fas fa-smog');

//   }
// }


// let searchInput = document.querySelector('.weather_search')
// let city = document.querySelector('.weather_city')
// let day = document.querySelector('.weather_day')
// let humidity = document.querySelector('.weather_indicator--humidity>.value')
// let wind = document.querySelector('.weather_indicator--wind>.value')
// let pressure = document.querySelector('.weather_indicator--pressure>.value')
// let image = document.querySelector('.weather_image')
// let temperature = document.querySelector('.weather_temperature>.value')


// const API_KEY = 'e7d5a843977321a1d1f3535a3019c762';
// const weatherBaseEndPoint = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}&units=metric`;

// const getWeatherbyCityName = async (city) => {
//   const endpoint = `${weatherBaseEndPoint}&q=${city}`;
//   const response = await fetch(endpoint);
//   const weather = await response.json();
//   return weather;

//   // console.log(weather);
// }

// searchInput.addEventListener('keydown', async (e) => {
//   // console.log(e);

//   if (e.keyCode===13) {
//     getWeatherbyCityName(searchInput.value)
//       let weather = await getWeatherbyCityName(searchInput.value)
//       // console.log(weather);
//       updateCurrentWeather(weather);
//   }
// })

// let updateCurrentWeather = (data) => {
//   city.textContent = data.name + ', ' data.sys.country;

// }

// let dayOfWeek = () => {
//   new Date().toLocaleDateString('en', {'weekday': 'long'});
// }

// let searchInput = document.querySelector('.weather-search')
// let city = document.querySelector('.weather_city')
// let day = document.querySelector('.weather_day')
// let humidity = document.querySelector('.weather_indicator--humidity>.value')
// let wind = document.querySelector('.weather_indicator--wind>.value')
// let pressure = document.querySelector('.weather_indicator--pressure>.value')
// let image = document.querySelector('.weather_image')
// let temperature = document.querySelector('.weather_temperature>.value');
// let cityBaseEndpoint = 'https://api.teleport.org/api/cities/{?search}'
// let autosuggestions = document.querySelector('#autosuggestions')
// const API_KEY = 'e7d5a843977321a1d1f3535a3019c762';
// const weatherBaseEndPoint = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}`;

// let getWeatherbyCityName = async (cityString) => {
//   let city;
//   if (cityString.includes(', ')) {
//       city = cityString.substring (0, cityString.indexOf(',')) + cityString.substring(cityString.lastIndexOf(','))
//   } else {
//     city = cityString;

//   }
//   let endpoint = `${weatherBaseEndPoint}&q=${city}`;
//   const response = await fetch(endpoint);
//   if(response.status !==200) {
//     alert('City you entered was not found')
//     return;
//   }
//   const weather = await response.json();
//   // console.log(weather)
//   return weather;
// }

// let getForecastByCityID = async (id) => {
//   let endpoint = forecastBaseEndpoint + '&id=' + id;
//   let result = await fetch(endpoint)
//   let forecast = await result.json();
//   let forecastList = forecast.list;
//   let daily = [];


//   forecastList.forEach(day  => {
//     let date  = new  Date(day.dt_txt.replace(' ', 'T'))
//     let hours = date.getHours();
//     if (hours === 12){
//       daily.push(day)
//     }
    
//   });
//   return daily;
// }

// let weatherForCity =  async (city) => {
//   let weather = await getWeatherbyCityName(city)
//     if (!weather) {
//       return;
//     }
//     let cityID = weather.id;
//     updateCurrentWeather(weather);
//     let forecast = await getForecastbyCityID(cityID)
//     updateForecast(forecast)
//   }

// let init = () => {
//   weatherForCity('lagos')
// }
// init();
// searchInput.addEventListener('keydown', async (e) => {
//   if (e.keyCode===13) {
//     weatherForCity(searchInput.value)
//   }   
// })

// // let updateCurrentWeather = (data) => {
// //   city.textContent = data.name =', ' + data.sys.country;
// //   day.textContent = dayOfWeek()
// // }

// searchInput.addEventListener('input', async () => {
//   let endpoint = cityBaseEndpoint + searchInput.value
//   let result = await (await fetch(endpoint)).json();
//   // console.log(result);
//   autosuggestions.innerHTML = '';
//   let cities = result._embedded['city:search-results']
//   let length = cities.length > 5 ? 5 :cities.length
//   for (let i = 0; i < length; i++) {
//     let option = document.createElement('option')
//     option.value =  cities[i].matching_full_name 
//     autosuggestions.appendChild(option); 
//   }
// })
// let updateCurrentWeather = (data) => {
//   // console.log(data)
//   city.textContent = `${data.name}, ${data.sys.country}`;
//   temperature.textContent = `${data.main.temp} °F`;
//   humidity.textContent = `${data.main.humidity}%`;
//   wind.textContent = `${data.wind.speed} mph`;
//   pressure.textContent = `${data.main.pressure} hPa`;
//   image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//   image.alt = data.weather[0].description;

//   const currentDate = new Date();
//   const options = { weekday: 'long', month: 'long', day: 'numeric' };
//   day.textContent = currentDate.toLocaleDateString('en-US', options);
// }



// // let dayOfWeek = () => {
// //   return new Date().toLocaleDateString('en', {'weekday': 'long'});
// // }




// const searchInput = document.querySelector('.weather-search');
// const city = document.querySelector('.weather_city');
// const day = document.querySelector('.weather_day');
// const humidity = document.querySelector('.weather_indicator--humidity > .value');
// const wind = document.querySelector('.weather_indicator--wind > .value');
// const pressure = document.querySelector('.weather_indicator--pressure > .value');
// const image = document.querySelector('.weather_image');
// const temperature = document.querySelector('.weather_temperature > .value');
// const cityBaseEndpoint = 'https://api.teleport.org/api/cities/?search=';
// const autosuggestions = document.querySelector('#autosuggestions');
// const API_KEY = 'e7d5a843977321a1d1f3535a3019c762';
// const weatherBaseEndPoint = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}`;
// const forecastBaseEndpoint = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`;

// const getWeatherByCityName = async (cityString) => {
//   let city;
//   if (cityString.includes(', ')) {
//     city = cityString.substring(0, cityString.indexOf(',')) + cityString.substring(cityString.lastIndexOf(','));
//   } else {
//     city = cityString;
//   }

//   const endpoint = `${weatherBaseEndPoint}&q=${city}`;
//   const response = await fetch(endpoint);

//   if (response.status !== 200) {
//     alert('City you entered was not found');
//     return;
//   }

//   const weather = await response.json();
//   return weather;
// };

// const getForecastByCityID = async (id) => {
//   const endpoint = `${forecastBaseEndpoint}&id=${id}`;
//   const result = await fetch(endpoint);
//   const forecast = await result.json();
//   const forecastList = forecast.list;
//   const daily = [];

//   forecastList.forEach((day) => {
//     const date = new Date(day.dt * 1000);
//     const hours = date.getHours();
//     if (hours === 12) {
//       daily.push(day);
//     }
//   });

//   return daily;
// };

// const weatherForCity = async (city) => {
//   const weather = await getWeatherByCityName(city);
//   if (!weather) {
//     return;
//   }
//   const cityID = weather.id;
//   updateCurrentWeather(weather);
//   const forecast = await getForecastByCityID(cityID);
//   updateForecast(forecast);
// };

// const init = () => {
//   weatherForCity('');
// };

// init();

// searchInput.addEventListener('keydown', async (e) => {
//   if (e.keyCode === 13) {
//     weatherForCity(searchInput.value);
//   }
// });

// searchInput.addEventListener('input', async () => {
//   const endpoint = `${cityBaseEndpoint}${searchInput.value}`;
//   const result = await (await fetch(endpoint)).json();
//   autosuggestions.innerHTML = '';
//   const cities = result._embedded['city:search-results'];
//   const length = cities.length > 5 ? 5 : cities.length;

//   for (let i = 0; i < length; i++) {
//     const option = document.createElement('option');
//     option.value = cities[i].matching_full_name;
//     autosuggestions.appendChild(option);
//   }
// });

// const updateCurrentWeather = (data) => {
//   city.textContent = `${data.name}, ${data.sys.country}`;
//   temperature.textContent = `${data.main.temp} °F`;
//   humidity.textContent = `${data.main.humidity}%`;
//   wind.textContent = `${data.wind.speed} mph`;
//   pressure.textContent = `${data.main.pressure} hPa`;
//   image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//   image.alt = data.weather[0].description;
//   const currentDate = new Date();
// const options = { weekday: 'long', month: 'long', day: 'numeric' };
// day.textContent = currentDate.toLocaleDateString('en-US', options);
//  }

// const searchInput = document.querySelector('.weather-search');
// const city = document.querySelector('.weather_city');
// const day = document.querySelector('.weather_day');
// const humidity = document.querySelector('.weather_indicator--humidity > .value');
// const wind = document.querySelector('.weather_indicator--wind > .value');
// const pressure = document.querySelector('.weather_indicator--pressure > .value');
// const image = document.querySelector('.weather_image');
// const temperature = document.querySelector('.weather_temperature > .value');
// const cityBaseEndpoint = 'https://api.teleport.org/api/cities/?search=';
// const autosuggestions = document.querySelector('#autosuggestions');
// const API_KEY = 'e7d5a843977321a1d1f3535a3019c762';
// const weatherBaseEndPoint = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}`;
// const forecastBaseEndpoint = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`;

// const getWeatherByCityName = async (cityString) => {
//   let city;
//   if (cityString.includes(', ')) {
//     city = cityString.substring(0, cityString.indexOf(',')) + cityString.substring(cityString.lastIndexOf(','));
//   } else {
//     city = cityString;
//   }

//   const endpoint = `${weatherBaseEndPoint}&q=${city}`;
//   const response = await fetch(endpoint);

//   if (response.status !== 200) {
//     alert('City you entered was not found');
//     return;
//   }

//   const weather = await response.json();
//   return weather;
// };

// const getForecastByCityID = async (id) => {
//   const endpoint = `${forecastBaseEndpoint}&id=${id}`;
//   const result = await fetch(endpoint);
//   const forecast = await result.json();
//   const forecastList = forecast.list;
//   const daily = [];

//   for (let i = 0; i < 5; i++) {
//     daily.push(forecastList[i]);
//   }

//   return daily;
// };

//   // forecastList.forEach((day) => {
//   //   const date = new Date(day.dt * 1000);
//   //   const hours = date.getHours();
//   //   if (hours === 12) {
//   //     daily.push(day);
//   //   }

// //   });

// //   return daily;
// // };

// // const weatherForCity = async (city) => {
// //   const weather = await getWeatherByCityName(city);
// //   if (!weather) {
// //     return;
// //   }
// //   const cityID = weather.id;
// //   updateCurrentWeather(weather);
// //   const forecast = await getForecastByCityID(cityID);
// //   updateForecast(forecast);
// // };

// const weatherForCity = async (city) => {
//   const weather = await getWeatherByCityName(city);
//   if (!weather) {
//     return;
//   }
//   const cityID = weather.id;
//   updateCurrentWeather(weather);
//   const forecast = await getForecastByCityID(cityID);
//   updateForecast(forecast);
// };


// const init = () => {
//   weatherForCity('');
// };

// init();

// searchInput.addEventListener('keydown', async (e) => {
//   if (e.keyCode === 13) {
//     weatherForCity(searchInput.value);
//   }
// });

// searchInput.addEventListener('input', async () => {
//   const endpoint = `${cityBaseEndpoint}${searchInput.value}`;
//   const result = await (await fetch(endpoint)).json();
//   autosuggestions.innerHTML = '';
//   const cities = result._embedded['city:search-results'];
//   const length = cities.length > 5 ? 5 : cities.length;

//   for (let i = 0; i < length; i++) {
//     const option = document.createElement('option');
//     option.value = cities[i].matching_full_name;
//     autosuggestions.appendChild(option);
//   }
// });

// const updateCurrentWeather = (data) => {
//   city.textContent = `${data.name}, ${data.sys.country}`;
//   temperature.textContent = `${data.main.temp} °F`;
//   humidity.textContent = `${data.main.humidity}%`;
//   wind.textContent = `${data.wind.speed} mph`;
//   pressure.textContent = `${data.main.pressure} hPa`;
//   image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//      image.alt = data.weather[0].description;
//     const currentDate = new Date();
//    const options = { weekday: 'long', month: 'long', day: 'numeric' };
//    day.textContent = currentDate.toLocaleDateString('en-US', options);
//     }



