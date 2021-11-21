import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Messages from './components/Messages';
import Header from './components/Header';
import Add from './components/Add';
import Edit from './components/Edit';

const App = () => {
  let [isAdding, setIsAdding] = useState(false);
  let [messages, setMessages] = useState([])
  let [isEditing, setIsEditing ] = useState(false)


  
  //connect to API
  const getMessages = () => {
    axios
      .get('https://one-good-thing.herokuapp.com/api/messages')
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
      .post('https://one-good-thing.herokuapp.com/api/messages', newMessage) //what to push to api
      .then((response) => {
      console.log(response.data);
      getMessages()
    })
  }

  const handleDelete = (e) => {
    axios
      .delete(
        'https://one-good-thing.herokuapp.com/api/messages/' + e.target.value
      )
      .then((response) => {
        getMessages()
      })
  }

  const handleUpdate = () => {
    axios
      .put()
      .then((response) => {

      })
  }

  const toggleEditForm = () => {
    if (isEditing === false) {
      setIsEditing(true)
    } if (isEditing === true) {
      setIsEditing(false)
    }
  }

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
        toggleEditForm={toggleEditForm}
      />
      {isAdding ? (
        <Add
          handleCreate={handleCreate}
          isAdding={isAdding}
          setIsAdding={setIsAdding}
        />
      ) : null}

      {
        isEditing ? (
          <Edit
            handleUpdate={handleUpdate}
            isEditing={isEditing}
            toggleEditForm={toggleEditForm}
          />
        ) : (
            <></>
        )
      }

    </div>
  );
};

export default App;
