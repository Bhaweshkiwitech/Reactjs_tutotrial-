import React,{useState} from "react";

function App() {
  return (
    <>
      <h1>High Order Component</h1>
      {/* <Counter/> */}
      <HOC cmp={Counter}/>
    </>
  );
}
function HOC(props){
 return <h2 style={{backgroundColor:'red'}}><props.cmp/></h2>

}
function Counter() {
  const [count, setCount]=useState(0)
  return <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>Update</button>
    </div>
  
}

export default App;
