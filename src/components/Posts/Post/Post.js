import React from 'react';

import './../Posts.css';

const Post = ({post}) => {

    const {userId, id, title, body} = post;

    return (
        <div className={'post'}>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
        </div>
    );
};

export {Post};