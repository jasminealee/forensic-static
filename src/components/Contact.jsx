import React from 'react';

function contact(props) {
  let _userEmail = null;
  let _subject = null;
  let _recipientEmail;
  let _content = null;
  var contact = {
    backgroundColor: '#E0FFFF',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    border: ''
  }

  return (
    <div style={contact}>
      <h1>If you're having technical issues please contact Jasmine Lee by filling out the form.</h1>
      <form>
        <input
          type='text'
          id='userEmail'
          placeholder='User`s Email'
          ref={(input) => {_userEmail = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='subject'
          placeholder='Subject'
          ref={(input) => {_subject = input;}}/>
        <br/>
        <br/>
        <input
          type='text'
          id='recipientEmail'
          ref={(input) => {_recipientEmail = input;}}/>
        <br/>
        <br/>
        <textarea
          id='content'
          placeholder='Content'
          ref={(textarea) => {_content = textarea;}}/>
        <br/>
        <button type='submit'>Submit!</button>
      </form>
    </div>
  );
}

export default contact;
