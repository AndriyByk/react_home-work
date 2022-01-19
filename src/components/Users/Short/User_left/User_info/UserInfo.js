import React from 'react';

import '../../../../../App.css';

const UserInfo = ({name}) => {
    return (
        <div className={'userInfo'}>
            {name}
        </div>
    );
};

export default UserInfo;