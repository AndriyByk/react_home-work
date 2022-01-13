import './User.css';

export default function User (props) {
    const {id, name, username, email} = props;

    return (
        <div className={"user"}>
            <div className={"user-id"}>
                {id}
            </div>
            <div className={"user-nameDetails"}>
                <div className={"user-name"}>
                    {name}
                </div>
                <div className={"user-username"}>
                    {username}
                </div>
            </div>
            <div className={"user-email"}>
                {email}
            </div>
        </div>
    );
}