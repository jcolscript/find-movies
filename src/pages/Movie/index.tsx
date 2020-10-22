import React from 'react';
import { Link, useParams } from 'react-router-dom';

import useMovieget from '../../hooks/use-movie-get'

import notposter from '../../assets/not-poster.svg';

interface ParamTypes {
  username: string
}

const Movie: React.FC = () => {
  const { username } = useParams<ParamTypes>();

  const {
    movie,
    loading,
  } = useMovieget(username);

  return (
    <>
      <div className="container d-flex justify-content-end mt-2">
        <nav className="navbar navbar-dark bg-brand">
          <Link to="/" className="btn btn-primary my-2 my-sm-0">
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path>
            </svg>
            {" "} Voltar
          </Link>
        </nav>
      </div>

      <main role="main">
        <div className="py-5 bg-brand">
          <div className="container">
            {loading ?
              (<h1 className="text-light text-center">Loading...</h1>)
            :
            (
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4 shadow-sm">
                    <img className="img-fluid" src={movie?.Poster === "N/A" ? notposter : movie?.Poster}  alt={movie?.Title}/>
                    <div className="card-body">
                      <div className="card-text text-dark">
                        <h4 className="text-primary">{movie?.Title}</h4>
                        <div>
                          <span className="mr-2 font-weight-bolder">Tipo:</span>
                          <span>{movie?.Type}</span>
                        </div>
                        <div>
                          <span className="mr-2 font-weight-bolder">Ano:</span>
                          <span >{movie?.Year}</span>
                        </div>
                        <div>
                          <span className="mr-2 font-weight-bolder">ImdbID:</span>
                          <span>{movie?.imdbID}</span>
                        </div>
                        <div>
                          <span className="mr-2 font-weight-bolder">Rating: </span>
                        </div>
                      </div>
                      {movie?.Ratings.map((rating) => (
                        <span className="badge badge-secondary mr-2 p-1" key={rating.Source}>{rating.Source}<span className="badge badge-light ml-1">{rating.Value}</span></span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card mb-4 shadow-sm text-dark">
                    <div className="card-body">
                      <div className="card-text">
                        <p className="h4 font-weight-normal">{movie?.Plot}</p>
                        <div className="mt-3">
                          <span className="text-muted mr-2">{movie?.Runtime}</span>
                          <span className="text-muted mr-2">{movie?.Released}</span>
                          <span className="text-muted">Classificação: {movie?.Rated}</span>
                        </div>
                        <div className="mt-3">
                          <div>
                            <strong className="mr-2">Diretores:</strong>
                            <span className="text-muted">{movie?.Director}</span>
                          </div>
                          <div>
                            <strong className="mr-2">Atores principais: </strong>
                            <span className="text-muted">{movie?.Actors}</span>
                          </div>
                          <div>
                            <strong className="mr-2">Generos: </strong>
                            <span className="text-muted">{movie?.Genre}</span>
                          </div>
                          <div>
                            <strong className="mr-2">Pais: </strong>
                            <span className="text-muted">{movie?.Country}</span>
                          </div>
                          <div>
                            <strong className="mr-2">Idioma: </strong>
                            <span className="text-muted">{movie?.Language}</span>
                          </div>
                          <div>
                            <strong className="mr-2">Prêmios: </strong>
                            <span className="text-muted">{movie?.Awards}</span>
                          </div>
                          <div>
                            <strong className="mr-2">Produção: </strong>
                            <span className="text-muted">{movie?.Production}</span>
                          </div>
                          <div>
                            <strong className="mr-2">Roteiristas: </strong>
                            <span className="text-muted">{movie?.Writer}</span>
                          </div>
                        </div>
                        <div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end align-items-center mt-4">
                        <span className="badge badge-warning p-1 mr-2">Metascore<span className="badge badge-light ml-2">{movie?.Metascore}</span></span>
                        <span className="badge badge-warning p-1 mr-2">IMDB Aval.<span className="badge badge-light ml-2">{movie?.imdbRating}</span></span>
                        <span className="badge badge-warning p-1">IMDB Votos<span className="badge badge-light ml-2">{movie?.imdbVotes}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </main>
    </>
  );
}

export default Movie;
