import React, { useEffect, useState } from "react"; //importing hooks from React

function App() {
  const [count, setCount] = useState(0); // defining useState hooks
  useEffect(() => {
    console.log("useEffect"); // defining hooks also we can define more than one hook in function based
  });
  return (
    <div>
      <h1>useEffect Hooks {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default App;
