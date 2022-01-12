import {useEffect, useState} from "react";

import Comment from "../comment/Comment";
import './Comments.css';

export default function Comments() {

    let [commentList, setCommentList] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(response => response.json())
            .then(comments => setCommentList(comments));
    }, []);

    return (
        <div className={"comments"}>
            {commentList.map((value) =>
                <Comment
                    postId={value.postId}
                    id={value.id}
                    name={value.name}
                    email={value.email}
                    body={value.body}/>
            )}
        </div>
    );
}