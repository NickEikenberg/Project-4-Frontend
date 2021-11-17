import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Messages from './components/Messages';

const App = () => {
  return (
    <div className="main_container">
      <h3>Tell me how great your day was</h3>
      <Messages></Messages>
    </div>
  );
};

export default App;
