import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services";
import '../HomePage/HomePage.css';

const UserDetailsPage = () => {
    const [user, setUser] = useState({});
    const {id} = useParams();
    const location = useLocation();
    const {state} = location;

    useEffect(()=> {
        if (state) {
            setUser(state);
            return;
        }

        userService.getById(id).then(value => setUser(value))
    }, [id]);

    return (
        <div className={'user-details'}>
            <div className={'user-details-wrapper'}>
                <div className={'user-name user-info'}>{user.id}) {user.name}</div>
                <div className={'user-info'}>{user.username}</div>
                <div className={'user-info'}>{user.email}</div>
                <div className={'user-info'}>{user.phone}</div>
                <div className={'user-info'}>{user.website}</div>
                <Link to={'posts'}><button>Posts</button></Link>
            </div>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};