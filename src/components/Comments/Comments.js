import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllCommentsThunk} from "../../store/slices";
import {Comment} from "./Comment/Comment";
import './Comments.css';

const Comments = () => {

    const {comments, status, error} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllCommentsThunk())
    },[]);

    return (
        <div className={'comments'}>
            {status === 'pending' && <h2>Трішки зачекайте..</h2>}
            {error && <h2>{error}</h2>}
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};