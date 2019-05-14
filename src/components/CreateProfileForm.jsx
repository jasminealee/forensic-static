import React from 'react';
import PropTypes from 'prop-types';

function CreateProfileForm(props){

  return (
    <div>
      <form>
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
          ref={(input) => {_Birthday = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='gender'
          placeholder='Gender'
          ref={(input) => {_Gender = input;}}/>
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
          id='note'
          placeholder='Note'
          ref={(textarea) => {_note = textarea;}}/>
        <br/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}


export default CreateProfileForm;
