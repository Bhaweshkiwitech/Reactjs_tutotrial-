import React, { useEffect,useState} from "react";

function App(props) {
useEffect(()=>{
    alert('count is' +props.count)

   
},[props.count,props.data]) // ham dono ka data yaha dekh sakte hai
  
  return (
    <div className="App">
      <h1>useEffect with specific State and props</h1>
      <h1>data Props:{props.data}</h1>
      <h1> Data count:{props.count}</h1>
     
    </div>
  );
}

export default App;
