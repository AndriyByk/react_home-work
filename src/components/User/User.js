import React from 'react';

import '../../App.css';

const User = (props) => {
    const {user: {id, name, username, email}} = props;

    return (
        <div className={'user'}>
            {id}) {name} - {username} - {email}
        </div>
    );
};

export default User;