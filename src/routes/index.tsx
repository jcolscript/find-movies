import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import Movie from '../pages/Movie';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main}/>
    <Route path="/movie/:username+" exact component={Movie}/>
  </Switch>
);

export default Routes;
