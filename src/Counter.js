import React, { useState } from 'react';

function Counter() {
  // Creating a state with an initial value of 0
  const [count, setCount] = useState(0);

  // setCount is a function that updates the state
  return (
    <div>
      <h2>Counter Example</h2>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
