import { IWeather } from './types';

export default class Weather {
  constructor(
    public location: string,
    public temperatureInKelvin: number,
    public headline: string
  ) {}

  static async getCurrentWeather() {
    const response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=61994fd9117fcb793efcd1c61bbcc70c',
      { mode: 'cors' }
    ).then();

    const parsedResponse: IWeather = await response.json();

    return new Weather(
      parsedResponse.name,
      parsedResponse.main.temp,
      parsedResponse.weather[0].main
    );
  }
}
