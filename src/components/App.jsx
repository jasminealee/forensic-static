import React from "react";
import Header from "./Header";
import Profile from "./Profile";
import Error404 from "./Error404";

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
