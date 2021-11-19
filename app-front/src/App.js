import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Messages from './components/Messages';
import Header from './components/Header';
import Add from './components/Add';

const App = () => {
  let [isAdding, setIsAdding] = useState(true);
  let [goodThing, setGoodThing] = useState([])
  
  //create
  const handleCreate = () => {
    axios.post().then((response) => {
      console.log(response.data);
      getGoodThings()
    })
  }

  //connect to API
  const getGoodThings = () => {
    axios
      .get('')
      .then((response) => setGoodThing(response.data),
        (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }
  //connect to axios  
  useEffect(() => {
    getGoodThings()
  }, [])
  

  return (
    <div className="main_container">
      <Header isAdding={isAdding} setIsAdding={setIsAdding} />
      <Messages />
      {
        isAdding ?
          <Add handleCreate={handleCreate}/>
        : null
      }
    </div>
  );
};

export default App;
