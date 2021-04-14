import Weather from './weather';

const container = document.getElementById('container');

container.innerText = 'Hello from Typescript!';
Weather.getWeather().then((response) => {
  console.log(response);
});
