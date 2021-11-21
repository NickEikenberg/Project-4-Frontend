import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../util/css/messages.css';
import Edit from './Edit';

const Messages = (props) => {
  return (
    <div className="messages-container">
      <div className="messages">
        {props.messages.map((message) => {
          return (
            <>
              <div className="message" key={message.id}>
                <h3 className="message-title">Title: {message.title}</h3>
                <hr></hr>
                <h4>By {message.name}:</h4>
                <p>{message.message}</p>
                <div>Likes: {message.likes}</div>
                <div className="btn-container">
                  <button onClick={props.handleDelete} value={message.id}>
                    Delete
                  </button>
                </div>
                <Edit
                  message={message}
                  handleUpdate={props.handleUpdate}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
