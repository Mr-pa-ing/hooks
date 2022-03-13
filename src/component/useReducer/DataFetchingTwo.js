import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
    isLoading: true,
    error: null,
    posts: []
}

const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                error: null,
                posts: action.payload
            };
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                error: 'Something was wrong!!!!!',
                posts: []
            };
        default:
            return state;
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/3")
            .then(res => {
                dispatch({type: 'FETCH_SUCCESS', payload: res.data});
            })
            .catch(err => {
                dispatch({type: 'FETCH_ERROR'});
            })
    }, []);

  return (
    <div>
        {state.isLoading ? 'Loading....' : state.posts.title}
        {state.error ? state.error: null}
    </div>
  )
}

export default DataFetchingTwo;