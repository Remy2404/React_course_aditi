import React from 'react'
import { useState } from 'react';

const CounterApp = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);


  return (
    <div>
      <h1>Counter App Component</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default CounterApp;