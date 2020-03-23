import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import FormDropdown from './components/FormDropdown';

function App() {
  return (
    <div>
      <Home></Home>
      <FormDropdown temperature={33} unit='F' isDisplayed={true} />
    </div>
  );
}

export default App;
