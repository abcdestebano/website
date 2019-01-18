import React from 'react'
import { Switch, Route } from 'react-router-dom'

// PAGES
import Home from '../pages/Home/Home';
import Work from '../pages/Work/Work';
import About from '../pages/About/About';
import Studies from '../pages/Studies/Studies'
import NotFound from '../pages/NotFound';

const Routes = () => (
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route exact path="/studies" component={Studies} />
      <Route component={NotFound} />
   </Switch>
)

export default Routes