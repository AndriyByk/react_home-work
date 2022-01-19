import React from 'react';

import Post from './Post/Post';
import '../../App.css';

const Posts = ({posts}) => {

    return (
        <div className={'posts'}>
            {posts.map(post =>
                <Post key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body}/>
            )}
        </div>
    );
};

export default Posts;