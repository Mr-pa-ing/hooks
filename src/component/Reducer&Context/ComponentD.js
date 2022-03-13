import React, {useContext} from 'react';
import {CounterContext} from './PComponent';

function ComponentD() {
    const counterContext = useContext(CounterContext);

  return (
    <div>
        ComponentD : {counterContext.countState}
        <button onClick={() => counterContext.countDispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => counterContext.countDispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={() => counterContext.countDispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ComponentD;