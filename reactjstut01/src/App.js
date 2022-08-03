import React from 'react'
import './style.css'
import style from './custom.module.css'
function App() {
  return (
    <div className='App'>
    {/* className Styling */}
      <h1 className='primary'>hello Bhawesh</h1> 
      {/* inline styling we use double curly brackets first for styling second for object */}
      <h1 style={{color:'red',backgroundColor:'blue'}}>hello Bhawesh</h1> 
      {/* we are using modular css here  */}
      <h1 className={style.success}>hello Bhawesh</h1> 
      </div>
  )
}

export default App