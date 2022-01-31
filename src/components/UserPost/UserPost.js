import React from 'react';

import './../../pages/Home.css';

const UserPost = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div className={'user-post'}>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default UserPost;