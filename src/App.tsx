import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MoviesProvider } from './context/MoviesContext'

import Routes from './routes'

const App: React.FC = () => {
  return (
      <Router>
        <MoviesProvider>
          <Routes />
        </MoviesProvider>
      </Router>
  );
};

export default App;
