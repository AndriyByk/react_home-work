import './Comment.css';

export default function Comment(props) {
    const {postId, id, name, email, body} = props;

    return (
        <div className={"comment"}>
            <div className={"comment-postId"}>
                {postId}
            </div>
            <div className={"comment-details"}>
                <div className={"comment-id"}>
                    {id}
                </div>
                <div className={"comment-nameOfUser"}>
                    {name}
                </div>
                <div className={"comment-emailOfUser"}>
                    {email}
                </div>
            </div>
            <div className={"comment-body"}>
                {body}
            </div>
        </div>
    )
}