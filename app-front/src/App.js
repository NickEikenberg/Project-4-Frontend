import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Messages from './components/Messages';

import Header from './components/Header';
import Add from './components/Add';

const App = () => {
  return (
    <div className="main_container">
      <Header />
      <Add />
      <Messages />
    </div>
  );
};

export default App;
