import React from 'react';

import '../../../App.css';

const Post = (props) => {

    const {userId, id, title, body} = props;

    return (
        <div className={'post'}>
            <div>{userId}</div>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;