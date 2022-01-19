import React from 'react';

import UserInfo from "./User_info/UserInfo";
import LeftButton from './Left_button/LeftButton';
import '../../../../App.css';

const UserLeft = (props) => {
    const {name, id, getUserInfo} = props;

    return (
        <div className={'userLeft'}>
            <UserInfo name={name}/>
            <LeftButton id={id} getUserInfo={getUserInfo}/>
        </div>
    );
};

export default UserLeft;