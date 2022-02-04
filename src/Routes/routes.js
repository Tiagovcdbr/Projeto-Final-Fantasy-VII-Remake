import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home/HomePage';

import Characters from '../pages/Sections/Characters/Characters';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Characters} path="/characters" exact />
    </BrowserRouter>
  )
}

export default Routes;