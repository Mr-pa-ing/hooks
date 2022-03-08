import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState([]);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                const {data} = res;
                setPost(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick]);

  return (
    <div>
        <input type='text' onChange={(e) => setId(e.target.value)} value={id} />
        <button onClick={() => setIdFromButtonClick(id)}>Fetch Data</button>
        <p key={id}>{post.title}</p>
       {/* {
            posts.map(post => {
               return <li key={post.id}>{post.title}</li>
            })
        }  */}
    </div>
  )
}

export default DataFetching