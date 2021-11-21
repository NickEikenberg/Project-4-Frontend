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
    // props.handleCreate(message);
  };

  return (
    <div>
      {props.isEditing ? (
        <div>
          <div className="add_good_thing_container">
            <div className="good_thing_form">
              <div className="add-head">
              <div className="empty-space"></div>
              <h2>EDIT YOUR GOOD MOMENT</h2>
            <div className="close-modal" onClick={props.toggleEditForm}>X</div>
            </div>
            <form onSubmit={handleSubmit} className="add_thing">
              <label htmlFor="name">Title: </label>
              <input
                type="text"
                name="title"
                className="input"
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="name">Message: </label>
              <textarea
                id="textarea"
                name="message"
                rows="6"
                cols="59"
                placeholder={props.message}
                onChange={(event) => {
                  getCharacterCount();
                  handleChange(event);
                }}
                maxLength="280"
                className="text_area"
              ></textarea>
              <br />
              <br />
              <input className="send" type="submit" value="SUBMIT"></input>
            </form>
            <br />
            <span>Character count: {characterCount}</span>
         </div>
        </div>
      </div>
      ) : (
          <></>
        )
      }
    </div>


    // <div>
    //   <div className="add_good_thing_container">
    //     <div className="good_thing_form">
    //       <div className="add-head">
    //         <div className="empty-space"></div>
    //         <h2>EDIT YOUR GOOD MOMENT</h2>
    //         <div className="close-modal">X</div>
    //       </div>
    //       <form onSubmit={handleSubmit} className="add_thing">
    //         <label htmlFor="name">Title: </label>
    //         <input
    //           type="text"
    //           name="title"
    //           className="input"
    //           onChange={handleChange}
    //           //   value={message.title}
    //         />
    //         <br />
    //         <br />
    //         <label htmlFor="name">Message: </label>
    //         <textarea
    //           id="textarea"
    //           name="message"
    //           rows="6"
    //           cols="59"
    //           placeholder={props.message}
    //           onChange={(event) => {
    //             getCharacterCount();
    //             handleChange(event);
    //           }}
    //           maxLength="280"
    //           className="text_area"
    //           //   value={message.message}
    //         ></textarea>
    //         <br />
    //         <br />
    //         <input className="send" type="submit" value="SUBMIT"></input>
    //       </form>
    //       <br />
    //       <span>Character count: {characterCount}</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Edit;
