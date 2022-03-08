import React, {useEffect, useState} from 'react'
import ClassMouse from './ClassMouse';
import HooksMouse from './HooksMouse';

function ToggleDisplay() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
        <button onClick={() => (setDisplay(!display))}>Toggle Display</button>
        {
            display && <HooksMouse/>
        }
    </div>
  )
}

export default ToggleDisplay