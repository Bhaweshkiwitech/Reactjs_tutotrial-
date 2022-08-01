import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [status, setStatus] = React.useState(true); //defining state by default we are taking true value in useState.

  return (
    <div className="App">
      {
        status ? <h1>HEllo Dear Lets Do this</h1> : null //if status is true show element <h1></h1> otherwise show null
      }

      {/* <button onClick={() => setStatus(false)}>hide</button>
      <button onClick={() => setStatus(true)}>show</button> //we are using two button to show and hide content  */}
      {/* 
      if status is true it shows the content if it is false it hide the content */}
      <button onClick={() => setStatus(!status)}>Toggle</button>
    </div>
  );
}

export default App;
