import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import NameList from './NameList';
import Profile from './Profile';
import ProfileList from './ProfileList';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' component={ProfileList} />
         <Route path='/profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
