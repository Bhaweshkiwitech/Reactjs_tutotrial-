import React,{useRef} from 'react'


export default function App() {
  let inputRef=useRef(null)
  function handleInput(){
    inputRef.current.value = 100
    console.log('function call');
  }
  return (
<>
  <h1>useRef in Reactjs</h1>
  <input type="text" ref={inputRef}/>
  <button onClick={handleInput}>Click me</button>

</>  )
}
