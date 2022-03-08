import React, { useState } from 'react';

function HookCounter() {
    const intialState = 0;
    const [count, setCount] = useState(intialState);

    const incrementFive = () =>{
        for(let i = 0; i < 5; i++){
            setCount(prevState => prevState + 1);
        }
    }

  return (
    <div>
        Count: {count}
        <button onClick={()=>setCount(intialState)}>Reset</button>
        <button onClick={()=>setCount((prevState) => prevState + 1)}>Increment</button>
        <button onClick={()=>setCount((prevState) => prevState - 1)}>Decrement</button>
        <button onClick={incrementFive}>IncrementFive</button>
    </div>
  )
}

export default HookCounter