import React,{useState} from 'react' // we are importing hook useState

export default function App() {
  const[data,setData]=useState('Bhawesh')
  return (
    <div>
      <h1>Hello! {data}</h1>
      <button onClick={()=>{setData('devesh')}}>update</button>
    </div>
  )
}
