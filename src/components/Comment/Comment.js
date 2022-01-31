import React from 'react';

import './../../pages/Home.css';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={'comment'}>
            <div>{postId}</div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export default Comment;