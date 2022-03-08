import React, {useState} from 'react';

function Input() {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''                                                                                                                                                                                                                                
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setName(prevState => {
            if(name === 'firstName'){
                return {...prevState, firstName: value};
            } else if(name === 'lastName'){
                return {...prevState, lastName: value};
            }
        });
    }

  return (
    // <form>
    //     <input type='text' name='firstName' onChange={(e) => setName({...name, firstName: e.target.value})} value={name.firstName} />
    //     <input type='text' name='lastName' onChange={(e) => setName({...name, lastName: e.target.value})} value={name.lastName} />
    //     <h2>Your firstName is - {name.firstName}</h2>
    //     <h2>Your lastName is - {name.lastName}</h2>
    //     <h2>{JSON.stringify(name)}</h2>
    // </form>              or

    <form>
        <input type='text' name='firstName' onChange={handleChange} value={name.firstName} />
        <input type='text' name='lastName' onChange={handleChange} value={name.lastName} />
        <h2>Your firstName is - {name.firstName}</h2>
        <h2>Your lastName is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
    </form>
  )
}

export default Input;