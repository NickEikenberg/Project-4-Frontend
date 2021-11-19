import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../util/css/messages.css';

const Messages = (props) => {
  let [messages, setMessages] = useState([]);

  const getMessages = () => {
    axios.get('http://localhost:8000/api/messages').then(
      (res) => setMessages(res.data),
      (err) => console.error(err)
    );
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="messages-container">
      <div className="messages">
        {props.messages.map((message) => {
          return (
            <div className="message" key={message.id}>
              <h3 className="message-title">Title: {message.title}</h3>
              <hr></hr>
              <h4>By {message.name}:</h4>
              <p>{message.message}</p>
              <div>Likes: {message.likes}</div>
              <div className="btn-container">
                <button onClick={props.toggleEditForm}>Edit</button>
                <button onClick={props.handleDelete} value={message.id}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
