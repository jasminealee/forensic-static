import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import NameList from './NameList';
import Profile from './Profile';
import Contact from './Contact';
import CreateProfileControl from './CreateProfileControl';
import UserProfile from './UserProfile';
import { Switch, Route } from 'react-router-dom';



function App(){
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' component={NameList} />
         <Route path='/contact' component={Contact} />
         <Route path='/createprofilecontrol' component={CreateProfileControl} />
         <Route path='/profile' component={Profile} />
         <Route path='/userProfile' component={UserProfile} />
         <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
