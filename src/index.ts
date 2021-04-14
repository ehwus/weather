import Weather from './weather';

const container = document.getElementById('container');

Weather.getCurrentWeather().then((response) => {
  container.innerText = `You are in ${response.location}, where it is ${response.temperature} degrees. I would describe the weather as - ${response.description}`;
});
