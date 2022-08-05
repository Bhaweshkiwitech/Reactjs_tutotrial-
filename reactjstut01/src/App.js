import React, { useState, useMemo } from "react";
import User from "./User";
function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  const multiCountMemo = useMemo(
    // this help  us not to updated data when item is updated, it is updated when count is updated
    function multiCount() {
      return count * 5;     // useMemo  help to improve performance
    },
    [count]
  );

  return (
    <>
      <h1>Lifting State up</h1>
      <h2>Count:{count}</h2>
      <h2>item:{item}</h2>
      <h2> function:{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update count</button>
      <button onClick={() => setItem(item * 10)}>Update items</button>
    </>
  );
}

export default App;
