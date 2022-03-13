import React, { useContext } from 'react';
import {CounterContext} from './PComponent';

function ComponentA() {
    const countContext = useContext(CounterContext);

  return (
    <div>
        ComponentA : {countContext.countState}
        <button onClick={() => countContext.countDispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => countContext.countDispatch({type: 'decrement'})}>Decement</button>
        <button onClick={() => countContext.countDispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ComponentA