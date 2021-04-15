import Weather from './weather';
import Gif from './gif';
import './style.css';

const gifLocationInDom = document.getElementById('gif');
const input = document.getElementById('locationInput') as HTMLInputElement;
const card = document.getElementById('resultsCard');
const errorCard = document.getElementById('errorCard');
const submit = document.getElementById('locationSubmit');
const results = document.getElementById('results');

submit.addEventListener('click', async () => {
  try {
    card.style.visibility = 'hidden';
    errorCard.style.visibility = 'hidden';
    const weather = await Weather.getCurrentWeather(input.value);
    let newHtml = `<p class="locationAndTemp">${weather.location} - ${weather.temperature}°c</p>`;
    newHtml += `<p class="description">${capitalizeString(
      weather.description
    )}`;
    results.innerHTML = newHtml;
    const gif = await Gif.getGif(weather.description);
    gifLocationInDom.innerHTML = `<img src="${gif.url} class=\"gif\"" />`;
    card.style.visibility = 'visible';
  } catch {
    results.innerText = 'Location not found, please try again';
    errorCard.style.visibility = 'visible';
  }
});

const capitalizeString = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
