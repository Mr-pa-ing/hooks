import React, { useEffect, useState } from 'react'

function HookCouterTwo() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${time} times`
    },[time]);

    const handleClick = () => {
        setTime(prevTime => {
            return prevTime + 1;
        });
    }

  return (
    <div>
        <button onClick={handleClick}>
            You Clicked {time} times
        </button>
    </div>
  )
}

export default HookCouterTwo;