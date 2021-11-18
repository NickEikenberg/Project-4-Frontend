import React, { useState } from 'react';
// import '../util/css/add.css';

const Add = () => {
  let [characterCount, setCharacterCount] = useState(280);

  const getCharacterCount = () => {
    const text = document.getElementById('textarea');
    let chars = 280;
    setCharacterCount(chars - text.value.length);
  };

  return (
    <div>
      <h1>SUBMIT YOUR GOOD MOMENT</h1>

      <div className="goodThingForm">
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Your Name" />
          <textarea
            id="textarea"
            name="message"
            placeholder="One good thing that happened today was..."
            onChange={getCharacterCount}
            maxLength="280"
          ></textarea>
          <input type="submit" value="submit"></input>
        </form>
        <h1>Character count: {characterCount}</h1>
      </div>
    </div>
  );
};
export default Add;
