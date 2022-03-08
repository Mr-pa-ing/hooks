import React, {useState, useEffect} from 'react'

function HooksMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        console.log('useEffect call');
        window.addEventListener('mousemove', mouseMovehandler);

        //useEffect clean up function like componentWillUnmount
        return () => {
            console.log('useEffect cleanup function');
            window.removeEventListener('mousemove',mouseMovehandler);
        }
    },[]);

    const mouseMovehandler = (e) => {
        console.log('Mouse event')
        setX(e.clientX);
        setY(e.clientY);
    }

  return (
    <div>
        X - {x} : Y - {y}
    </div>
  )
}

export default HooksMouse;