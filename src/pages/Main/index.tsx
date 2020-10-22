import React, { useCallback, useState, useRef  } from 'react';

import MovieCard from '../../components/MovieCard'

import { SearchBox } from './styles'

import useMoviesSearch from '../../hooks/use-movies-search'

const Main:React.FC = () => {
  const [searchMovieParameter, setSearchMovieParameter] = useState('');
  const [searchMovieQuery, setSearchMovieQuery] = useState('');
  const [page, setPage] = useState(1);

  const {
    movies,
    setMovies,
    hasMore,
    loading,
    searchBoxUp,
    setSearchBoxUp
  } = useMoviesSearch(searchMovieQuery, page);

  const observer = useRef<IntersectionObserver | null>(null);

  const lastMovieElementRef = useCallback(node => {
    if (loading) return observer.current
    if (observer.current) observer.current.disconnect()

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(state => state + 1)
      }
    })

    if (node) observer.current.observe(node)
  }, [loading, hasMore])


  function handleChangeSearchMovie(e: any) {
    setSearchMovieParameter(e.target.value);
    console.log(searchMovieParameter);
  }

  const handleSearchMovie = useCallback( async () => {
    setMovies([]);
    console.log(searchMovieParameter)

    if (!searchMovieParameter) {
      console.log('Campo vazio');
      setSearchBoxUp(false)
      setMovies([]);
      return;
    }

    setSearchMovieQuery(searchMovieParameter);

  }, [searchMovieParameter, page]);

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
        {
          movies.map((movie, index) => {
            if(movies.length === index + 1) {
              return <MovieCard ref={lastMovieElementRef} {...movie} key={movie.imdbID}/>
            } else {
              return <MovieCard {...movie} key={movie.imdbID}/>
            }
          }
        )}
      </div>
    </div>
  );
}

export default Main;
