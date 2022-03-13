import React from 'react';
import { UserContext, UniContext } from './ComponentC';

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
                {
                    user => {
                        return (
                            <UniContext.Consumer>
                                {
                                    uni => {
                                        return <div>UserContext value - {user} , UniContext value - {uni}</div>
                                    }
                                }
                            </UniContext.Consumer>
                        )
                    }
                }   
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF