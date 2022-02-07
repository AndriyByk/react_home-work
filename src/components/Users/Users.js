import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {User} from "./User/User";
import './Users.css';
import {getAllUsersThunk} from "../../store/slices";

const Users = () => {

    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersThunk())
    }, []);

    return (
        <div className={'users'}>
            {status === 'pending' && <h2>Трішки зачекайте..</h2>}
            {error && <h2>{error}</h2>}
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};