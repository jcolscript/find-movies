export interface IResponseMovies {
  Search: IMoviesSimpleData[];
  totalResults: string;
  Response: string;
}

export interface IMoviesSimpleData {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
