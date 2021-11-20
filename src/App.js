import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Messages from './components/Messages';
import Header from './components/Header';
import Add from './components/Add';

const App = () => {
  let [isAdding, setIsAdding] = useState(false);
  let [messages, setMessages] = useState([]);

  //connect to API and pull data
  const getMessages = () => {
    axios
      .get('http://localhost:8000/api/messages')
      .then(
        (response) => setMessages(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };

  //create connection to push to API
  //will take argument which will take state of message
  const handleCreate = (newMessage) => {
    axios
      .post('http://localhost:8000/api/messages', newMessage) //what to push to api
      .then((response) => {
        console.log(response.data);
        getMessages();
      });
  };
  //delete takes an argument
  const handleDelete = (e) => {
    axios
      .delete('http://localhost:8000/api/messages/' + e.target.value)
      .then((response) => {
        getMessages();
      });
  };

  // const toggleEditForm = () => {
  //   setIsEditing(!isEditing);
  // };

  //connect to axios
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="main_container">
      <Header isAdding={isAdding} setIsAdding={setIsAdding} />
      <Messages
        messages={messages}
        handleDelete={handleDelete}
        // toggleEditForm={toggleEditForm}
      />
      {isAdding ? (
        <Add
          handleCreate={handleCreate}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
        />
      ) : null}
    </div>
  );
};

export default App;