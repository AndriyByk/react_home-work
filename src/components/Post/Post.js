import React from 'react';

import '../../pages/HomePage/HomePage.css';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className={'post'}>
            {id}: {title}
        </div>
    );
};

export {Post};