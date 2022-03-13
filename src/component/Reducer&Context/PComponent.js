import React, {useContext, useReducer} from 'react'
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function PComponent() {
    const [count, dispatch] = useReducer(reducer, initialState);

  return (
      <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
            Count : {count}
            <ComponentA/>
            <ComponentB/>
            <ComponentC/>
        </div>
     </CounterContext.Provider>
  )
}

export default PComponent;