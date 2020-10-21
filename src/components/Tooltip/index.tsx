import React from 'react';

import { Container } from './styles'

import { IMoviesSimpleData } from '../../infra/interfaces/movies.interfaces'

const Tooltip: React.FC<IMoviesSimpleData> = ({Title, Type, Year, imdbID, children}) => {
  return (
    <Container>
      {children}
      <div>
        <h6>
          {Title}
        </h6>
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
        <a href="/">Mais Info</a>
      </div>
    </Container>
  );
}

export default Tooltip;
