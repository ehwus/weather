import Weather from './weather';

const input = document.getElementById('locationInput') as HTMLInputElement;
const submit = document.getElementById('locationSubmit');
const results = document.getElementById('results');

submit.addEventListener('click', async () => {
  try {
    const weather = await Weather.getCurrentWeather(input.value);
    results.innerText = `You are in ${weather.location}, where it is ${weather.temperature}°c. I would describe the weather as - ${weather.description}`;
  } catch {
    results.innerText = 'Location not found, please try again';
  }
});
