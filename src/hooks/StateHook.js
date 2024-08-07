import React, { useState } from 'react';

const StateHook = () => {
  //the old way of declaring a state variable usetate(0)
  //will be called every time the component renders.
  //this function method will only be called once when the component mounts.
  //this function inside the usestate function can increase the running speed
  const [count, setCount] = useState(() =>{
    return 0 // Initialize count to 0 on first render.
  });

  return (
    <div>
      <h2>useState Hook Example</h2>
      <button onClick={() => setCount(count + 1)} aria-label="Increment count">+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)} aria-label="Decrement count">-</button>
    </div>
  );
};

export default StateHook;
