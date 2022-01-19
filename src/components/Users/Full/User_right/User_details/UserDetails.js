import React from 'react';

import '../../../../../App.css';

const UserDetails = (user) => {

    const {id, name, username, email, street, zipcode, phone} = user;

    return (
        <div className={'userDetails'}>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{street}</div>
            <div>{zipcode}</div>
            <div>{phone}</div>
        </div>
    );
};

export default UserDetails;