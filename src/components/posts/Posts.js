import {useEffect, useState} from "react";

import Post from "../post/Post";
import './Posts.css';

export default function Posts () {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch( "https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => setPostList(posts));
    }, []);

    return (
        <div className={"posts"}>
            {postList.map((value) =>
                <Post
                    key={value.id}
                    userId={value.userId}
                    id={value.id}
                    title={value.title}
                    body={value.body}/>
            )}
        </div>
    );
}