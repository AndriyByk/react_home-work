import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";
import {Comment} from "../../components";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(()=> {
        postService.getCommentsById(id).then(value =>
            setComments(value))
    }, [id]);

    return (
        <div className={'post-comments'}>
            {comments.map(comment =>
                <Comment key={comment.id} comment={comment}/>
            )}
        </div>
    );
};

export {CommentsPage};