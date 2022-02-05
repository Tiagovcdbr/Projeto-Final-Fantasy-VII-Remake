import React from 'react';
import { Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from '../pages/Home/HomePage';

import Characters from '../pages/Sections/Characters/Main/Main';
import Mechanics from '../pages/Sections/Mechanics/Mechanics';
import Cloud from '../pages/Sections/Characters/Cloud/Cloud';
import Aerith from '../pages/Sections/Characters/Aerith/Aerith';
import Barret from '../pages/Sections/Characters/Barret/Barret';
import Biggs from '../pages/Sections/Characters/Biggs/Biggs';
import Heidegger from '../pages/Sections/Characters/Heidegger/Heidegger';
import Jessie from '../pages/Sections/Characters/Jessie/Jessie';
import RedXIII from '../pages/Sections/Characters/RedXIII/RedXIII';
import Reno from '../pages/Sections/Characters/Reno/Reno';
import Rude from '../pages/Sections/Characters/Rude/Rude';
import Rocche from '../pages/Sections/Characters/Rocche/Rocche';
import Tifa from '../pages/Sections/Characters/Tifa/Tifa';
import Wedge from '../pages/Sections/Characters/Wedge/Wedge';
import Sephiroth from '../pages/Sections/Characters/Sephiroth/Sephiroth';
import President from '../pages/Sections/Characters/President/President';
import Hojo from '../pages/Sections/Characters/Hojo/Hojo';
import Menu from '../pages/Menu/Menu';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Menu} path="/" exact />
        <Route component={Home} path="/home" exact />
        <Route component={Characters} path="/main" exact />
        <Route component={Mechanics} path="/mechanics" exact />

        <Route component={Cloud} path="/cloud" exact />
        <Route component={Aerith} path="/aerith" exact />
        <Route component={Barret} path="/barret" exact />
        <Route component={Biggs} path="/biggs" exact />
        <Route component={Heidegger} path="/heidegger" exact />
        <Route component={Jessie} path="/jessie" exact />
        <Route component={RedXIII} path="/redxiii" exact />
        <Route component={Reno} path="/reno" exact />
        <Route component={Rude} path="/rude" exact />
        <Route component={Rocche} path="/rocche" exact />
        <Route component={Tifa} path="/tifa" exact />
        <Route component={Wedge} path="/wedge" exact />
        <Route component={President} path="/president" exact />
        <Route component={Hojo} path="/hojo" exact />
        <Route component={Sephiroth} path="/sephiroth" exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;