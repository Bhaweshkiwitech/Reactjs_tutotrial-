import React from 'react'
import User from './User'
function App() {
  function parentAlert(data){
    alert(data.name);
  }
  return (
    <>
    <h1>Lifting State up</h1>
      <User alert={parentAlert}/>
    </>
  )
}

export default App