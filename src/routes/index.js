import React from 'react'
import { Switch, Route } from 'react-router-dom'

// PAGES
import Home from '../pages/Home/Home';
import Work from '../pages/Work';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound';

const Routes = () => (
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
   </Switch>
)

export default Routes