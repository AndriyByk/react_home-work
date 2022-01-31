import React from 'react';

import './../../pages/Home.css';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className={'post'}>
            {id}: {title}
        </div>
    );
};

export default Post;