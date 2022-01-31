import React from 'react';

import './../../pages/Home.css';

const User = ({user}) => {
    const {id, name} = user;
    return (
        <div className={'user'}>
            {id}) {name}
        </div>
    );
};

export default User;