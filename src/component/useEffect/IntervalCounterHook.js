import React, { useEffect, useState } from 'react'

function IntervalCounterHook() {
    const [count, setCount] = useState(0);

    const dosomething = () => {
        console.log('someProps')
    }

    useEffect(()=>{
        dosomething();
        const interval = setInterval(handleCount, 1000);

        return () => {
            clearInterval(interval);
        }
    },[])

    const handleCount = () => {
        setCount(preCount => preCount + 1);
    }


  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default IntervalCounterHook;