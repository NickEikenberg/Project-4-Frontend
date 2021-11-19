import React, {useEffect, useState} from 'react';
import '../util/css/add.css';

const Add = () => {
  let [characterCount, setCharacterCount] = useState(280);

  const getCharacterCount = () => {
    const text = document.getElementById('textarea');
    let chars = 280;
    setCharacterCount(chars - text.value.length);
  };

  return (
    <div className="add_good_thing_container">
      <h1>SUBMIT YOUR GOOD MOMENT</h1>
      <div className="good_thing_form">
        <form className="add_thing">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" className="input" />
          <br />
          <br />
          <label htmlFor="name">Title: </label>
          <input type="text" name="title" className="input" />
          <br />
          <br />
          <label htmlFor="name">Message: </label>
          <textarea
            id="textarea"
            name="message"
            rows="6" cols="59"
            placeholder="One good thing that happened today was..."
            onChange={getCharacterCount}
            maxLength="280"
            className="text_area"
          ></textarea>
          <br />
          <br />
          <input className="send" type="submit" value="submit"></input>
        </form>
        <br/>
        <span>Character count: {characterCount}</span>
      </div>
    </div>
  );
};
export default Add;
