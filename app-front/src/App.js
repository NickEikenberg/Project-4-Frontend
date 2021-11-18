import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Add from './components/Add'

const App = () => {
  return (
    <div className="main_container">
      <Header />
      <h3>Tell me how great your day was</h3>
      <Add />
    </div>
  );
};

export default App;
