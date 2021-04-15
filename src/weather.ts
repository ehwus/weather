import { IWeather } from './types';

export default class Weather {
  temperature: number;

  constructor(
    public location: string,
    public description: string,
    temperatureInKelvin: number
  ) {
    this.temperature = Weather.kelvinToCentigrade(temperatureInKelvin);
  }

  static async getCurrentWeather() {
    try {
      const response = await fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=Madeupistan&APPID=61994fd9117fcb793efcd1c61bbcc70c',
        { mode: 'cors' }
      );

      const parsedResponse: IWeather = await response.json();

      return new Weather(
        parsedResponse.name,
        parsedResponse.weather[0].description,
        parsedResponse.main.temp
      );
    } catch (error) {
      return Promise.reject();
    }
  }

  private static kelvinToCentigrade(kelvin: number): number {
    const centigrade = kelvin - 273.15;
    return +centigrade.toFixed(2);
  }
}
