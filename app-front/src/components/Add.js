import React, { useEffect, useState } from 'react';
import '../util/css/add.css';

const Add = (props) => {
  //state of form
  let defalutForm = { name: '', title: '', message: '' };
  let [message, setMessage] = useState(defalutForm);

  const toggleAddForm = () => {
    props.setIsAdding(!props.isAdding);
  };

  //get character count
  let [characterCount, setCharacterCount] = useState(280);
  const getCharacterCount = () => {
    const text = document.getElementById('textarea');
    let chars = 280;
    setCharacterCount(chars - text.value.length);
  };

  //handle change
  //targets the value of each imput based on name
  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
    console.log(message);
  };

  //need to handle submit in here
  //takes message as argument wich has the state
  //pushes message to api
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleCreate(message);
    toggleAddForm();
  };

  return (
    <div className="add_good_thing_container">
      <div className="good_thing_form">
        <div className="add-head">
          <div className="empty-space"></div>
          <h2>SUBMIT YOUR GOOD MOMENT</h2>
          <div className="close-modal" onClick={toggleAddForm}>
            X
          </div>
        </div>
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
            placeholder="One good thing that happened today was..."
            onChange={(event) => {
              getCharacterCount();
              handleChange(event);
            }}
            maxLength="280"
            className="text_area"
            value={message.message}
          ></textarea>
          <br />
          <br />
          <input className="send" type="submit" value="SUBMIT"></input>
        </form>
        <br />
        <span>Character count: {characterCount}</span>
      </div>
    </div>
  );
};
export default Add;
