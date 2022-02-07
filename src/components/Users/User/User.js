import React from 'react';

import './../Users.css';

const User = ({user}) => {

    const {id, username, name, email} = user;
    return (
        <div className={'user'}>
            <div>Id: {id}</div>
            <div>Username: {username}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
        </div>
    );
};

export {User};