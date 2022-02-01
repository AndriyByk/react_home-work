import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import User from "../../components/User/User";
import {userService} from "../../services/user.service";
import './../Home.css';

const Users = () => {

    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => {
            setAllUsers(value)
        })
    }, []);

    return (
        <div className={'users'}>
            <div className={'users-wrapper'}>
                {allUsers.map(user =>
                    <User key={user.id} user={user}/>
                )}
            </div>
            <Outlet/>
        </div>
    );
};

export default Users;