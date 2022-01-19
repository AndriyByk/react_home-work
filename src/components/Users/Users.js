import React, {useState} from 'react';

import Short from "./Short/Short";
import Full from "./Full/Full";
import '../../App.css';

const Users = ({getUserPosts}) => {

    const [user, setUser] = useState(null);

    const getUserInfo = (id) => {
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(value => value.json())
                .then(value => setUser(value))
    }

    return (
        <div className={'users'}>
            <Short getUserInfo={getUserInfo}/>
            {user && <Full user={user} getUserPosts={getUserPosts}/>}
        </div>
    );
};

export default Users;