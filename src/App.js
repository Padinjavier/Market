import logo from './logo.svg';
import './App.css';

import React from 'react';
import CAMARA from './Camara_scanner/camara';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CAMARA />
      </header>
    </div>
  );
}

export default App;
