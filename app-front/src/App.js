import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Messages from './components/Messages';
import Header from './components/Header';
import Add from './components/Add';

const App = () => {
  let [isAdding, setIsAdding] = useState(false);

  return (
    <div className="main_container">
      <Header isAdding={isAdding} setIsAdding={setIsAdding} />
      <h3>Tell me how great your day was</h3>
      <Messages></Messages>
      {isAdding ? <Add /> : null}
    </div>
  );
};

export default App;
