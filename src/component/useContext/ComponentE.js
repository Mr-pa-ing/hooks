import React, { useContext } from 'react';
import ComponentF from './ComponentF';
import { UserContext, UniContext } from './ComponentC';

function ComponentE() {
    const user = useContext(UserContext);
    const uni = useContext(UniContext);

  return (
    <div>
        UserContext - {user}: UniContext - {uni}
    </div>
  )
}

export default ComponentE;