export interface IWeather {
  coord: Coord;
  weather?: WeatherEntity[] | null;
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}
interface Coord {
  lon: number;
  lat: number;
}
interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
interface Wind {
  speed: number;
  deg: number;
}
interface Clouds {
  all: number;
}
interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
