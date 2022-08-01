import React, { useState } from "react";
import './App.css';
export default function Basicform() {
  const[name,setName]=useState('');//defining state here
  const[tnc,setTnc]=useState(false);
  const[interest, setInterest]=useState('');
  function getFormData(e){   //creating function for from data 
    console.log(name,tnc,interest);
    e.preventDefault() // e is event and preventDefault() is a function
  }
  return (
    <div className="App">
      <h1>Basicform handle in Reactjs</h1>
    {/* on submit it call above function */}
      <form onSubmit={getFormData}> 
      {/* it will target your input value using event and state defined above at line 4 it uses arrow function to execute the code*/}
        <input type="text" placeholder="enter your name"  value={name} onChange={(e)=>setName(e.target.value)}/>
          <br></br>
         {/* it will target your input value using event and state defined above at line 5 */}
        <select onChange={(e)=> setInterest(e.target.value)}>
          <option> Select option</option>
          <option>Bhawesh</option>
          <option>Devesh</option>
        </select><br></br>
   {/* it will target your input value using event and state defined above at line 6 */}
          <input type="checkbox"  onChange={(e)=> setTnc(e.target.checked)}/>
            <span>Accept Terms and conditions</span>
        
          <br></br>
          <button type='submit'> Submit</button>
        
      </form>
    </div>
  );
}
