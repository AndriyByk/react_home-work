import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import '../HomePage/HomePage.css';
import {User} from "../../components";

const UsersPage = () => {

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

export {UsersPage};