import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {postService} from "../../services";
import '../HomePage/HomePage.css';

const PostDetailsPage = () => {
    const [post, setPost] = useState({});
    const {id} = useParams();

    const location = useLocation();
    const {state} = location;

    useEffect(()=> {
        if (state){
            setPost(state);
            return;
        }

        postService.getById(id).then(value => setPost(value))
    }, [id]);

    return (
        <div className={'post-details'}>
            <div className={'post-details-wrapper'}>
                <div>({post.id}) {post.title}</div>
                <div className={'post-body'}>{post.body}</div>
                <Link to={'comments'}><button>Comments</button></Link>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};