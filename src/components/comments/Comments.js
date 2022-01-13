import {useEffect, useState} from "react";

import Comment from "../comment/Comment";
import './Comments.css';

export default function Comments() {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(comments => setCommentList(comments));
    }, []);

    return (
        <div className={"comments"}>
            {commentList.map((value) =>
                <Comment
                    key={value.id}
                    postId={value.postId}
                    id={value.id}
                    name={value.name}
                    email={value.email}
                    body={value.body}/>
            )}
        </div>
    );
}