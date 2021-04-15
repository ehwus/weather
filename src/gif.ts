import { Giphy } from './types';

export default class Gif {
  static async getGif(query: string) {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=RIQepIYMrVmr17DAq6yRyo6usx05E05n&q=${query}&limit=1&offset=0&rating=g&lang=en`,
      { mode: 'cors' }
    );
    const parsedResponse: Giphy = await response.json();
    return new Gif(parsedResponse.data[0].images.original.url);
  }

  constructor(public url: string) {}
}
