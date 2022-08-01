import React from "react";
import {useState} from 'react'

function Profile() {
  const [loggedIn, setLoggedIn] = useState(false); //defining state taking false means user is not logged in.
// const loggedIn= true //it is working with this also but in react you can use state instead of variable 
return (
    <div>
      {/* below line means if user is logged in then it will show successfully logged in : means otherwise please logged in */}
      {/* it is like if else condition in reactjs */}
      {loggedIn ? (
        <h1>You are successfully logged in</h1>
      ) : (
        <h1>Please looged in</h1>
      )}
    </div>
  );
}

export default Profile;
