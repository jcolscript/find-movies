import { useEffect, useState } from 'react'

import {IMoviesCompleteData} from '../infra/interfaces/movies.interfaces'

import { client } from  '../infra/services/client';
import endpoints from '../infra/services/endpoints';

export default function useMoviesSearch(imdb_id: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState<IMoviesCompleteData>();

  useEffect(() => {
    setLoading(true)
    setError(false)

    client.get<IMoviesCompleteData>(endpoints.getMovie(imdb_id))
      .then(res => {
          setMovie(res.data);
          setLoading(false)
      }).catch(e => {
        setError(true)
        setLoading(false)
        console.log(e);
      })

      setLoading(false)
  }, [imdb_id])

  return { loading, error, movie }
}
