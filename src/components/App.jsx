import React from 'react';
import Header from './Header';
import Error404 from './Error404';
import NameList from './NameList';
import ProfileList from './ProfileList';
import Contact from './Contact';
import CreateProfileControl from './CreateProfileControl';
import UserProfile from './UserProfile';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component {

constructor(props) {
   super(props);
   this.state = {
     masterProfileList: []
   };
   this.handleAddingCreateProfileToList = this.handleAddingCreateProfileToList.bind(this);
 }

 handleAddingCreateProfileToList(create){
 var createMasterProfileList = this.state.masterProfileList.slice();
    createMasterTicketList.push(createProfile);
    this.setState({masterProfile: createMasterProfileList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
           <Route exact path='/' component={NameList} />
           <Route path='/contact' component={Contact} />
           <Route path='/createprofile' render={()=><CreateProfileControl onCreateProfileCreation={this.handleAddingCreateProfileToList} />} />
           <Route path='/profilelist' render={()=><ProfileList profileList={this.state.masterProfileList} />} />
           <Route path='/userProfile' component={UserProfile} />

           <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}
export default App;
