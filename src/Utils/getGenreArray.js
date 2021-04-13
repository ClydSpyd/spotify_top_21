import { arrayReduceAndSort } from "./arrayReduceAndSort";

export const getGenreArray = (artists) => {

  let genres = artists.map(artist => artist.genres.reduce((a, b) => a.concat(b), []));
  genres = genres.reduce((a, b) => a.concat(b), []);
  return arrayReduceAndSort(genres)

}