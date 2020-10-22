import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles'

import { IMoviesSimpleData } from '../../infra/interfaces/movies.interfaces'

const Tooltip: React.FC<IMoviesSimpleData> = ({Title, Type, Year, imdbID, children}) => {
  return (
    <Container>
      {children}
      <div>
        <h5>
          {Title}
        </h5>
        <div>
          <strong>Tipo:</strong>
          <span>{Type}</span>
        </div>
        <div>
          <strong>Ano:</strong>
          <span>{Year}</span>
        </div>
        <div style={{marginBottom: '10px'}}>
          <strong>imdbID:</strong>
          <span>{imdbID}</span>
        </div>
        <Link to={`/movie/${imdbID}`}>Mais Info</Link>
      </div>
    </Container>
  );
}

export default Tooltip;
