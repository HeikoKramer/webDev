class UI {
  constructor() {
    this.location  = document.getElementById('w-location');
    this.desc      = document.getElementById('w-desc');
    this.string    = document.getElementById('w-string');
    this.details   = document.getElementById('w-details');
    this.icon      = document.getElementById('w-icon');
    this.humidity  = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.min       = document.getElementById('w-min');
    this.max       = document.getElementById('w-max');
  }

  paint(weather) {
    this.location.textContent  = weather.name;
    this.desc.textContent      = weather.weather[0].main + ', ' + weather.weather[0].description;
    this.string.textContent    = weather.main.temp.toString() + ' °C';
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} °C`;
    this.min.textContent       = `Minimum: ${weather.main.temp_min}` + ' °C';
    this.max.textContent       = `Maximum: ${weather.main.temp_max}` + ' °C';
    this.humidity.textContent  = `Relative Humidity: ${weather.main.humidity}`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    
    
  }
}