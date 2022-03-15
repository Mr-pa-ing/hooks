import React, {useState, useMemo} from 'react';

function MemoCounter() {
    const [counterone, setCounterOne] = useState(0);
    const [countertwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterone + 1);
    }

    const incrementTwo = () => {
        setCounterTwo(countertwo + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 200000000)
        {
            i++;
        }
        return counterone % 2 === 0;
    }, [counterone]);

  return (
    <div>
        <h1>useMemo Hook</h1>
        <div>
            <button onClick={incrementOne}>Counter One - {counterone}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Counter Two - {countertwo}</button>
        </div>
        <br/>
    </div>
  )
}

export default MemoCounter;