// let searchInput = document.querySelector('.weather-search')
// let city = document.querySelector('.weather_city')
// let day = document.querySelector('.weather_day')
// let humidity = document.querySelector('.weather_indicator--humidity>.value')
// let wind = document.querySelector('.weather_indicator--wind>.value')
// let pressure = document.querySelector('.weather_indicator--pressure>.value')
// let image = document.querySelector('.weather_image')
// let temperature = document.querySelector('.weather_temperature>.value');
// let cityBaseEndpoint = 'https://api.teleport.org/api/cities/?search='
// let autosuggestions = document.querySelector('#autosuggestions')
// const API_KEY = 'e7d5a843977321a1d1f3535a3019c762';
// const weatherBaseEndPoint = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}`;
// const forecastBaseEndpoint = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`;

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
//     alert('City you entered was not found/type in a city below')
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
//     let forecast = await getForecastByCityID(cityID)
//     updateForecast(forecast)
//   }

// let init = () => {
// //   weatherForCity('')

// searchInput.focus(); // Place cursor in search input on page load
// //   city.style.display = 'none';
// //   day.style.display = 'none';
// //   humidity.style.display = 'none';
// //   wind.style.display = 'none';
// //   pressure.style.display = 'none';
// //   image.style.display = 'none';
// //   temperature.style.display = 'none';
// //   document.querySelector('.weather_forecast').style.display = 'none';

// }
// init();
// searchInput.addEventListener('keydown', async (e) => {
//   if (e.keyCode===13) {
//     weatherForCity(searchInput.value)
//   }   
// })

// let updateCurrentWeather = (data) => {
//   // console.log(data)
//   city.textContent = `${data.name}, ${data.sys.country}`;
//   temperature.textContent = `${data.main.temp} ° F`;
//   humidity.textContent = `${data.main.humidity}%`;
//   wind.textContent = `${data.wind.speed} mph`;
//   pressure.textContent = `${data.main.pressure} hPa`;
//   image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//   image.alt = data.weather[0].description;
//   const currentDate = new Date();
//   const options = { weekday: 'long', month: 'long', day: 'numeric' };
//   day.textContent = currentDate.toLocaleDateString('en-US', options);
// }

// const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   let updateForecast = (forecast) => {
//     let forecastBlock = document.querySelector('.weather_forecast')
//     forecastBlock.innerHTML = ''
//     let forecastData = ''
//     forecast.forEach(day => {
//       let date = new Date(day.dt_txt.replace(' ', 'T'))
//       let dayOfWeek = daysOfWeek[date.getDay()]
//       let iconUrl = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`
//       forecastData += `
//         <article class="weather_forecast_item">
//           <h3 class="weather_forecast_day">${dayOfWeek}</h3>
//           <img class="weather_forecast_icon" src="${iconUrl}" alt="${day.weather[0].description}">
//           <p class="weather_forecast_temp"><span class="value">${day.main.temp_max.toFixed(0)}° F</span></p>
//         </article>
//       `
//     })
//     forecastBlock.insertAdjacentHTML('afterbegin', forecastData)
//   }

let searchInput = document.querySelector('.search')
let city = document.querySelector('.city')
let day = document.querySelector('.day')
let humidity = document.querySelector('.weather_indicator--humidity>.value')
let wind = document.querySelector('.weather_indicator--wind>.value')
let pressure = document.querySelector('.weather_indicator--pressure>.value')
let image = document.querySelector('.image')
let temperature = document.querySelector('.temperature>.value');
let cityEndpoint = 'https://api.teleport.org/api/cities/?search='
let autosuggestions = document.querySelector('#autosuggestions')
const API_KEY = 'e7d5a843977321a1d1f3535a3019c762';
const weatherEndPoint = `https://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${API_KEY}`;
const forecastEndpoint = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&appid=${API_KEY}`;

let getWeatherbyCityName = async (cityString) => {
  let city;
  if (cityString.includes(', ')) {
      city = cityString.substring (0, cityString.indexOf(',')) + cityString.substring(cityString.lastIndexOf(','))
  } else {
    city = cityString;

  }
  let endpoint = `${weatherEndPoint}&q=${city}`;
  const response = await fetch(endpoint);
  if(response.status !==200) {
    alert('No correct city, please refresh page & try again')
    return;
  }
  const weather = await response.json();
  // console.log(weather)
  return weather;
}

let getForecastByCityID = async (id) => {
  let endpoint = forecastEndpoint + '&id=' + id;
  let result = await fetch(endpoint)
  let forecast = await result.json();
  let forecastList = forecast.list;
  let daily = [];


  forecastList.forEach(day  => {
    let date  = new  Date(day.dt_txt.replace(' ', 'T'))
    let hours = date.getHours();
    if (hours === 12){
      daily.push(day)
    }
    
  });
  return daily;
}

let weatherForCity =  async (city) => {
  let weather = await getWeatherbyCityName(city)
    if (!weather) {
      return;
    }
    let cityID = weather.id;
    updateWeather(weather);
    let forecast = await getForecastByCityID(cityID)
    updateForecast(forecast)
  }

let init = () => {
  weatherForCity('hidden')
}
init();
searchInput.addEventListener('keydown', async (e) => {
  if (e.keyCode===13) {
    weatherForCity(searchInput.value)
  }   
})

// let updateWeather = (data) => {
//   city.textContent = data.name =', ' + data.sys.country;
//   day.textContent = dayOfWeek()
// }

searchInput.addEventListener('input', async () => {
  let endpoint = cityEndpoint + searchInput.value
  let result = await (await fetch(endpoint)).json();
  // console.log(result);
  autosuggestions.innerHTML = '';
  let cities = result._embedded['city:search-results']
  let length = cities.length > 5 ? 5 :cities.length
  for (let i = 0; i < length; i++) {
    let option = document.createElement('option')
    option.value =  cities[i].matching_full_name 
    autosuggestions.appendChild(option); 
  }
})
let updateWeather = (data) => {
  // console.log(data)
  city.textContent = `${data.name}, ${data.sys.country}`;
  temperature.textContent = `${data.main.temp} ° F`;
  humidity.textContent = `${data.main.humidity}%`;
  wind.textContent = `${data.wind.speed} mph`;
  pressure.textContent = `${data.main.pressure} hPa`;
  image.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  image.alt = data.weather[0].description;
  const currentDate = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  day.textContent = currentDate.toLocaleDateString('en-US', options);
}

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let updateForecast = (forecast) => {
    let forecastBlock = document.querySelector('.weather_forecast')
    forecastBlock.innerHTML = ''
    let forecastData = ''
    forecast.forEach(day => {
      let date = new Date(day.dt_txt.replace(' ', 'T'))
      let dayOfWeek = daysOfWeek[date.getDay()]
      let iconUrl = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`
      forecastData += `
        <article class="weather_forecast_item">
          <h3 class="weather_forecast_day">${dayOfWeek}</h3>
          <img class="weather_forecast_icon" src="${iconUrl}" alt="${day.weather[0].description}">
          <p class="weather_forecast_temp"><span class="value">${day.main.temp_max.toFixed(0)}° F</span></p>
        </article>
      `
    })
    forecastBlock.insertAdjacentHTML('afterbegin', forecastData)
  }
  

  
  

