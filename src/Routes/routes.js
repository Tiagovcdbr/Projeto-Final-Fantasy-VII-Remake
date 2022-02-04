import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import Home from '../pages/Home/HomePage';

import Characters from '../pages/Sections/Characters/Main/Main';
import Mechanics from '../pages/Sections/Mechanics/Mechanics';
import Cloud from '../pages/Sections/Characters/Cloud/Cloud';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Characters} path="/main" exact />
      <Route component={Mechanics} path="/mechanics" exact />

      <Route component={Cloud} path="/cloud" exact />
    </BrowserRouter>
  )
}

export default Routes;