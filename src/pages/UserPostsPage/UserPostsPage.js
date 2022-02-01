import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../services";
import {UserPost} from "../../components";

const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
        userService.getPostsById(id).then(value =>
            setPosts(value))
    },[id]);

    return (
        <div className={'user-posts'}>
            {posts.map(post =>
                <UserPost key={post.id} post={post}/>
            )}
        </div>
    );
};

export {UserPostsPage};