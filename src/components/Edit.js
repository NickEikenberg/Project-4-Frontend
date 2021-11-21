import React, { useState } from 'react';

const Edit = (props) => {
  console.log(props.message);
  let [characterCount, setCharacterCount] = useState(280);
  let [message, setMessage] = useState({ ...props.message });

  const getCharacterCount = () => {
    const text = document.getElementById('textarea');
    let chars = 280;
    setCharacterCount(chars - text.value.length);
  };

  const handleChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
    console.log(message);
  };

  //need to handle submit in here
  //takes message as argument wich has the state
  //pushes message to api
  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleUpdate(message)
    
  };
  return (
    <>
      <details>
        <summary>Edit Message</summary>
        <form onSubmit={handleSubmit} className="add_thing">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            className="input"
            onChange={handleChange}
            value={message.name}
          />
          <br />
          <br />
          <label htmlFor="name">Title: </label>
          <input
            type="text"
            name="title"
            className="input"
            onChange={handleChange}
            value={message.title} 
          />
          <br />
          <br />
          <label htmlFor="name">Message: </label>
          <textarea
            id="textarea"
            name="message"
            rows="6"
            cols="59"
            placeholder={message.message}
            onChange={(event) => {
              getCharacterCount();
              handleChange(event);
            }}
            value={message.message}
            maxLength="280"
            className="text_area"
          ></textarea>
          <br />
          <br />
          <input className="send" type="submit" value="SUBMIT"></input>
        </form>
        <br />
        <span>Character count: {characterCount}</span>
     </details>
    </>
  )
};
export default Edit;
