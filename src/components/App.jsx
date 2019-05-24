import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import ProfileList from './ProfileList';
import Profile from './Profile';
import Contact from './Contact';
import NewProfileForm from './NewProfileForm';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  render(){
    return (
      <div>
        <Header/>
        <Switch>
           <Route exact path='/' component={ProfileList} />
           <Route path='/contact' component={Contact} />
           <Route path='/profile' component={Profile} />
           <Route path='/newprofileform' component={NewProfileForm} />
           <Route component={Error404} />
        </Switch>
      </div>
     );
  }
}
export default App;
