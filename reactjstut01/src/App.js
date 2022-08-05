import React,{useRef} from 'react'
import User from './User'

export default function App() {
let inputRef=useRef(null)
function updateInput(){
  inputRef.current.value = '1000'
  inputRef.current.style.color='red'
  inputRef.current.focus()
}
  return (
 <>
  <h1> forwardRef in ReactJs</h1>
  <User ref={inputRef}/>
  <button onClick={updateInput}>Click Me Men</button>

 </>
  )
}
