import React from "react";
import Header from "./Header";
import Welcome from "./Welcome";
import Profile from "./Profile";
import Error404 from "./Error404";
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/profile' component={Profile} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
