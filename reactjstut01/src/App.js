import React, { useEffect,useState} from "react";

function App() {
  const[data,setData]=useState(10);
  const[count,setCount]=useState(100);
  useEffect(() => {
    console.log("called with data state");
  },[data]);
  useEffect(() => {
    
    console.log("called with data state");
  },[count]);
  return (
    <div className="App">
      <h1>useEffect with specific State and props</h1>
      <h1>data:{data}</h1>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Update Count</button>
      <button onClick={()=>setData(data+1)}>Update Data</button>
    </div>
  );
}

export default App;
