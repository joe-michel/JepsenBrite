import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Content from './establishments/Content';

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Create from './Create'


const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/create" component={Create} />
    </Switch>)

export default Routes