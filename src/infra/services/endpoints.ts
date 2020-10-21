import env from '../utils/enviroments.config';

const endpoints = {
  getMovies: (name: string) => `${env.REACT_OMDB_API}&s=${name}`,
  getMovie: (imdb_id: number) => `${env.REACT_OMDB_API}&i=${imdb_id}`,
};

export default endpoints;
