import React, {useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";

import {postService} from "../../services";
import '../HomePage/HomePage.css';
import {Post} from "../../components";

const PostsPage = () => {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => {
            setAllPosts(value)
        })
    }, []);

    return (
        <div className={'posts'}>
            <div className={'posts-wrapper'}>
                {allPosts.map(post =>
                    <Link to={post.id.toString()} state={post}>
                        <Post key={post.id} post={post}/>
                    </Link>
                )}
            </div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};