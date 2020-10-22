import { useEffect, useState, useContext } from 'react'

import {IResponseMovies, IMoviesSimpleData} from '../infra/interfaces/movies.interfaces'

import { MoviesContext } from '../context/MoviesContext'

import { client } from  '../infra/services/client';
import endpoints from '../infra/services/endpoints';

export default function useMoviesSearch(query: string, page: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState<IMoviesSimpleData[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [searchBoxUp, setSearchBoxUp] = useState(false);
  const { setInitialMovies } = useContext(MoviesContext);

  useEffect(() => {
    setLoading(true)
    setError(false)

    client.get<IResponseMovies>(endpoints.getMovies(query, page))
      .then(res => {
        if(res.data.Search && res.data.Search.length > 0) {
          if(movies.length === 0) {
            setInitialMovies(res.data.Search);
          }
          setMovies(state => ([...state, ...res.data.Search]));
          setHasMore(res.data.Search.length > 0)
          setLoading(false)
          setSearchBoxUp(true)
        } else {
          setSearchBoxUp(false)
          setLoading(false)
          setMovies([])
        }
      }).catch(e => {
        setError(true)
        setSearchBoxUp(false)
        setLoading(false)
        setMovies([])
      })
      setLoading(false)

  }, [query, page, setInitialMovies])

  return { loading, error, movies, setMovies, hasMore, searchBoxUp, setSearchBoxUp }
}
