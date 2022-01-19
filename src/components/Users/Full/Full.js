import React from 'react';

import UserRight from './User_right/UserRight';
import '../../../App.css';

const Full = ({user, getUserPosts}) => {

    return (
        <div className={'full'}>
            <UserRight user={user} getUserPosts={getUserPosts}/>
        </div>
    );
};

export default Full;