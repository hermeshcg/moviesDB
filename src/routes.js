import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CountryDetails from './pages/MovieDetail';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:imdbID" exact component={CountryDetails} />
      </Switch>
    </BrowserRouter>
  );
}

// igonre

export default Routes;
