import React, {useState} from 'react'

function Random() {
    const [items, setItems] = useState([]);

    const handleClick = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ]);
    }

  return (
      <div>
          <button onClick={handleClick}>Add Random Number</button>
        <ul>
            {
                items.map(item => {
                   return <li key={item.id}>{item.value}</li>
                })
            }
        </ul>
      </div>
  )
}

export default Random;