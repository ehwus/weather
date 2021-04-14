export default class Weather {
  static async getWeather() {
    const response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=61994fd9117fcb793efcd1c61bbcc70c',
      { mode: 'cors' }
    );

    return await response.json();
  }
}
