import env from '../utils/enviroments.config';

const endpoints = {
  getMovies: (name: string, page: number) => `${env.REACT_OMDB_API}&s=${name}&page=${page}`,
  getMovie: (imdb_id: string) => `${env.REACT_OMDB_API}&i=${imdb_id}`,
};

export default endpoints;
