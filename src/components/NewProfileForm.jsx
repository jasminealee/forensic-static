import React from 'react';

function NewProfileForm(){

  return (
    <div>
      <form>
        <br/>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
        />
        <br/>
        <br/>
        <input
          type='text'
          id='lastName'
          placeholder='Last Name'
        />
        <br/>
        <br/>
        <input
          type='text'
          id='birthday'
          placeholder='Birthday'
          />
        <br/>
        <br/>
        <input
          type='text'
          id='gender'
          placeholder='Gender'
        />
        <br/>
        <br/>
        <input
          type='text'
          id='dayOfDeath'
          placeholder='Date of Death'
        />
        <br/>
        <br/>
        <input
          type='text'
          id='maintainedBy'
          placeholder='maintainedBy'
        />
        <br/>
        <br/>
        <textarea
          id='notes'
          placeholder='Notes'
        />
        <br/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default NewProfileForm;
