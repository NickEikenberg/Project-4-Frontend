import React from 'react';
// import '../util/css/add.css';

const Add = () => {
  return (
    <div>
      <h1>SUBMIT YOUR GOOD MOMENT</h1>

      <div className="goodThingForm">
        <form>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" placeholder="Your Name" />
          <textarea
            name="message"
            placeholder="One good thing that happened today was..."
          ></textarea>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    </div>
  );
};
export default Add;
