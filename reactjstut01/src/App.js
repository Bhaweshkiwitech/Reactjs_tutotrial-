import React,{useState} from 'react'

 function App() {
  let [val,setVal]=useState('Enter your name Bro')
  let [item,setItem]=useState('Enter your password Bro')
  return (
    <>
   <h1>Controlled Component</h1>
   <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
   <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
   <h3>Value :{val}</h3>
    </>
  )
}
export default App;
