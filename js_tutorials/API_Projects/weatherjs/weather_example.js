class Weather {
  constructor(city) {
    this.apiKey = ''; // <-- PLACE YOUR API KEY HERE
    this.city   = city;
    this.units  = 'metric';
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=${this.units}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
  }
}
