// Init weather object
const weather = new Weather('Amsterdam');

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
  weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => console.log(err));
}
