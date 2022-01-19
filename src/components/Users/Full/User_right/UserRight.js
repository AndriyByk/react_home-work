import React from 'react';

import UserDetails from "./User_details/UserDetails";
import RightButton from "./Right_button/RightButton";
import '../../../../App.css';

const UserRight = (props) => {
    const {user, getUserPosts} = props;

    return (
        <div className={'userRight'}>
            <UserDetails id={user.id} name={user.name} username={user.username} email={user.email}
                         street={user.address.street} zipcode={user.address.zipcode} phone={user.phone}/>
            <RightButton id={user.id} getUserPosts={getUserPosts}/>
        </div>
    );
};

export default UserRight;

// id={user.id} name={user.name} username={user.username} email={user.email}
// street={user.address.street} zipcode={user.address.zipcode} phone={user.phone}