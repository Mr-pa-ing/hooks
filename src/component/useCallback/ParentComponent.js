import React, { useState, useCallback } from 'react'
import Button from './Button';
import Counter from './Counter'
import Title from './Title'

function ParentComponent() {
    const [age, setAge] = useState(26);
    const [salary, setSalary] = useState(25000);

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1000);
    }, [salary]);

  return (
    <div>
        <Title/>
        <Counter text='Age' count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Counter text='Salary' count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent