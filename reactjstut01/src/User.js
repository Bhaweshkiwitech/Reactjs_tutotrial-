import React from 'react'

function User(props) {
  return (
    <div>
    <h1>Pass function as a Props</h1>
    <button onClick={()=>props.data()}>Call data function</button>
    </div>
  )
}

export default User