// Init weather object
const weather = new Weather('Frankfurt');
// Init UI 
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  weather.changeLocation(city);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
