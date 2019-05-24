// import React from 'react';
// import CreateProfileForm from './CreateProfileForm';
// import PropTypes from "prop-types";
//
//
// class CreateProfileControl extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       formVisibleOnPage: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(){
//     this.setState({formVisibleOnPage: true});
//     console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
//   }
//   render(){
//     let currentlyVisibleContent = null;
//     if (this.state.formVisibleOnPage){
//       currentlyVisibleContent = <CreateProfileForm onCreateProfileCreation={this.props.onCreateProfileCreation}/>;;
//     }
//     return (
//       <div>
//         <CreateProfileForm />
//         <strong onClick={this.handleClick}>Click me to change my state!</strong>
//       </div>
//     );
//   }
// }
//
// CreateProfileControl.propTypes = {
//   onCreateProfileCreation: PropTypes.func
// };
//
// export default CreateProfileControl;
