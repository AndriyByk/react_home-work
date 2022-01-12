import {useEffect, useState} from "react";

import User from "../user/User";
import './Users.css';

export default function Users() {
    let [userList, setUserList] = useState([]);

    useEffect(() => {
        fetch( "https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setUserList(users));
    }, []);

    return (
        <div className={"users"}>
        {userList.map((value) =>
                <User
                    id={value.id}
                    name={value.name}
                    username={value.username}
                    email={value.email}/>
            )}
        </div>
    );
}