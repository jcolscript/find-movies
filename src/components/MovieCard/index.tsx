import React from 'react';

import { IMoviesSimpleData } from '../../infra/interfaces/movies.interfaces';

import notposter from '../../assets/not-poster.svg';

import { AnimationContainer } from './styles';

import Tooltip from '../Tooltip/index'

const MovieCard: React.ForwardRefExoticComponent<IMoviesSimpleData> = React.forwardRef((
  {Poster, Title, Type, Year, imdbID},
   ref: React.Ref<HTMLDivElement >
  ) => {
  return (
      <AnimationContainer className="col-md-4" ref={ref}>
        <div className="card mb-4 shadow-sm" >
          <Tooltip Title={Title} Type={Type} Year={Year} imdbID={imdbID} Poster={Poster}>
            <img className="img-fluid" src={Poster === "N/A" ? notposter : Poster}  alt={Title}/>
          </Tooltip>
        </div>
      </AnimationContainer>
  );
})

export default MovieCard;
