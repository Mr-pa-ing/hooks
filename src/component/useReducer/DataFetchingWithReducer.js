import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetchingWithReducer() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => {
                setIsLoading(false);
                setError('');
                setPosts(res.data)
            })
            .catch(err => {
                setIsLoading(false); 
                setError('Something Was Wrong');
                setPosts([]);
            })
    }, []);

  return (
    <div>
        {isLoading ? "Loading..." : posts.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingWithReducer;