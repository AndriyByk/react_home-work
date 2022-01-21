import React, {useState} from 'react';

import Short from "./Short/Short";
import Full from "./Full/Full";
import '../../App.css';
import {userService} from "../../services/user.service";

const Users = ({getUserPosts}) => {

    const [user, setUser] = useState(null);

    const getUserInfo = (id) => {
            userService.getById(id)
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