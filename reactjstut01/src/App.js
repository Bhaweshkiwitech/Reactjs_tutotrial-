import React from "react";
import User from "./User";
import './App.css'

function App() {
  const[ name,setName]=React.useState("Devesh")
  return (
    <div className="App">
      <h1>Render Method in reactjs</h1>
      <User name ={name}/>
      <button onClick={()=>setName("Bhawesh")}>Update name</button>
    </div>
  );
}

export default App;
