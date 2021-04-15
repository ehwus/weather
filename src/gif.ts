import { Giphy } from './types';

const numberOfPossibleGifs = 50;

export default class Gif {
  static async getGif(query: string) {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=RIQepIYMrVmr17DAq6yRyo6usx05E05n&q=${query}&limit=${numberOfPossibleGifs}&offset=0&rating=g&lang=en`,
      { mode: 'cors' }
    );
    const parsedResponse: Giphy = await response.json();
    const randomImageIndex = Math.floor(Math.random() * 50);
    return new Gif(parsedResponse.data[randomImageIndex].images.original.url);
  }

  constructor(public url: string) {}
}
