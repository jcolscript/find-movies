import React, { useCallback, useState  } from 'react';

import MovieCard from '../../components/MovieCard'

import { SearchBox } from './styles'

import {IResponseMovies, IMoviesSimpleData} from '../../infra/interfaces/movies.interfaces'

import { client } from  '../../infra/services/client';

import endpoints from '../../infra/services/endpoints';

const Main:React.FC = () => {
  const [searchBoxUp, setSearchBoxUp] = useState(false);
  const [searchMovieParameter, setSearchMovieParameter] = useState('');
  const [movies, setMovies] = useState<IMoviesSimpleData[]>([]);

  function handleChangeSearchMovie(e: any) {
    setSearchMovieParameter(e.target.value);
    console.log(searchMovieParameter);
  }

  const handleSearchMovie = useCallback( async () => {
    console.log(searchMovieParameter)

    if (!searchMovieParameter) {
      console.log('Campo vazio');
      setSearchBoxUp(false)
      setMovies([]);
      return;
    }

    try {
      const { data } = await client.get<IResponseMovies>(endpoints.getMovies(searchMovieParameter));
      console.log(data.Search);
      if(data.Search && data.Search.length > 0) {
        setMovies(data.Search)
        setSearchBoxUp(true)
      } else {
        setMovies([])
        setSearchBoxUp(false)
      }
    } catch (error) {
      console.log('Erro ao buscar o filme!');
      setMovies([])
      setSearchBoxUp(false)
    }

  }, [searchMovieParameter]);

  return (
    <div className="container h-100 d-flex">
      <SearchBox className={`d-flex w-50 ${searchBoxUp ? 'centerToTop': 'topToCenter'}`}>
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Procure seu filme"
          onKeyPress={(e) => e.key === "Enter" && handleSearchMovie() }
          value={searchMovieParameter}
          onChange={handleChangeSearchMovie}
        />
        <button type="submit" onClick={handleSearchMovie} className="btn btn-primary btn-lg ml-2">Buscar</button>
      </SearchBox>
      <div className="row mt-5 py-5">
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.imdbID}/>
        ))}
      </div>
    </div>
  );
}

export default Main;
