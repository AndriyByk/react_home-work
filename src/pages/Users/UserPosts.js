import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import UserPost from "../../components/UserPost/UserPost";
import {userService} from "../../services/user.service";

const UserPosts = () => {
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

export default UserPosts;