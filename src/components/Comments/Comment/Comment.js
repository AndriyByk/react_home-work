import React from 'react';

import './../Comments.css';

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div className={'comment'}>
            <div>PostId: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {Comment};