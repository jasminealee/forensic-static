import React from 'react';
import PropTypes from 'prop-types';

function CreateProfileForm(props){
  let _firstName = null;
  let _lastName = null;
  let _birthday = null;
  let _gender = null;
  let _dayOfDeath = null;
  let _maintainedBy = null;
  let _notes = null;

  var createProfileForm = {
    backgroundColor: '#E0FFFF',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }  

  function handleCreateProfileFormSubmission(event) {
      event.preventDefault();
      props.onCreateProfileCreation({firstName: _firstName.value, lastName: _lastName.value, birthday: _birthday.value, gender: _gender.value, dayOfDeath: _dayOfDeath.value, maintainedBy: _maintainedBy.value, notes: _notes.value});
      _firstName = '';
      _lastName = '';
      _birthday = '';
      _gender = '';
      _dayOfDeath = '';
      _maintainedBy = '';
      _notes = '';
    }


  return (
    <div style={createProfileForm}>
      <form onSubmit={handleCreateProfileFormSubmission}>
        <br/>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          ref={(input) => {_firstName = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='lastName'
          placeholder='Last Name'
          ref={(input) => {_lastName = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='birthday'
          placeholder='Birthday'
          ref={(input) => {_birthday = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='gender'
          placeholder='Gender'
          ref={(input) => {_gender = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='dayOfDeath'
          placeholder='Date of Death'
          ref={(input) => {_dayOfDeath = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='maintainedBy'
          placeholder='maintainedBy'
          ref={(input) => {_maintainedBy = input;}}/>
        <br/>
        <br/>
        <textarea
          id='notes'
          placeholder='Notes'
          ref={(textarea) => {_notes = textarea;}}/>
        <br/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

CreateProfileForm.propTypes = {
  onCreateProfileCreation: PropTypes.func
};

export default CreateProfileForm;
