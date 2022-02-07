import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "./Post/Post";
import './Posts.css';
import {getAllPostsThunk} from "../../store/slices";

const Posts = () => {

    const {posts, status, error} = useSelector(store => store['postReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllPostsThunk())
    },[]);

    return (
        <div className={'posts'}>
            {status === 'pending' && <h2>Трішки зачекайте..</h2>}
            {error && <h2>{error}</h2>}
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};