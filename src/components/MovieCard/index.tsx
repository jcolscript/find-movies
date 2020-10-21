import React from 'react';

import { IMoviesSimpleData } from '../../infra/interfaces/movies.interfaces'

import { AnimationContainer } from './styles';

import Tooltip from '../Tooltip/index'

const MovieCard: React.FC<IMoviesSimpleData> = ({Poster, Title, Type, Year, imdbID}) => {
  return (
      <AnimationContainer className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <Tooltip Title={Title} Type={Type} Year={Year} imdbID={imdbID} Poster={Poster}>
            <img className="img-fluid" src={Poster}  alt={Title}/>
          </Tooltip>
        </div>
      </AnimationContainer>
  );
}

export default MovieCard;
