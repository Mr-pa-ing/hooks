import React from 'react';
import ComponentE from './ComponentE';

export const UserContext = React.createContext();
export const UniContext = React.createContext();

function ComponentC() {
  return (
    <div>
        <UserContext.Provider value='mr_paing'>
            <UniContext.Provider value='TU Monywa'>
                <ComponentE/>
            </UniContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentC;