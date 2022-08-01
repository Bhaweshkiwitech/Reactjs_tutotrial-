import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './User'

function App() {
  
function getData(){
  alert("hello from app")
}
  return (
    <div className='App'>
      <User data={getData}/>
    </div>
  );
}

export default App;
