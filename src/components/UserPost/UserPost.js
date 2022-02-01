import React from 'react';

import '../../pages/HomePage/HomePage.css';

const UserPost = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div className={'user-post'}>
            <div>UserId: {userId}</div>
            <div>PostId: {id}</div>
            <div>Post title: {title}</div>
            <div>Post body: {body}</div>
        </div>
    );
};

export {UserPost};