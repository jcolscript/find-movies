import React, { useCallback, useState  } from 'react';

import { SearchBox } from './styles'

const Main:React.FC = () => {
  const [searchBoxUp, setSearchBoxUp] = useState(false);

  const handleSearchMovie = useCallback((searchBoxUp) => {
    setSearchBoxUp(searchBoxUp)
  }, []);

  return (
    <div className="container h-100 d-flex">
      <SearchBox className={`d-flex w-50 ${searchBoxUp ? 'centerToTop': 'topToCenter'}`}>
        <input onKeyPress={(e) => e.key === "Enter" && handleSearchMovie(!searchBoxUp) } type="text" className="form-control form-control-lg" placeholder="Procure seu filme"/>
        <button onClick={() => handleSearchMovie(!searchBoxUp)} type="submit" className="btn btn-primary btn-lg ml-2">Buscar</button>
      </SearchBox>
    </div>
  );
}

export default Main;
