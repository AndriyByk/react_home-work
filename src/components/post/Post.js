import './Post.css';

export default function Post (props) {
    const {userId, id, title, body} = props;
    return (
        <div className={"post"}>
            <div className={"post-userId"}>
                {userId}
            </div>
            <div className={"post-id"}>
                {id}
            </div>
            <div className={"post-main"}>
                <div className={"post-title"}>
                    {title}
                </div>
                <div className={"post-body"}>
                    {body}
                </div>
            </div>
        </div>
    );
}