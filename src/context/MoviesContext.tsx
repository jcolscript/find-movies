import React, { createContext, useState } from 'react';

import { IMoviesCompleteData } from '../infra/interfaces/movies.interfaces';

interface IMoviesContext {
  initialMovies?:IMoviesCompleteData[];
  setInitialMovies: Function
}


const MoviesContext = createContext<IMoviesContext>({
  initialMovies: [],
  setInitialMovies: () => null,
});

type Props = {
  children: React.ReactNode;
}

const MoviesProvider = ({children}: Props) => {
  const [initialMovies, setInitialMovies] = useState<IMoviesCompleteData[]>([]);

    return (
    <MoviesContext.Provider value={{ initialMovies, setInitialMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export { MoviesProvider, MoviesContext };
