import React from 'react';

import '../../../../../App.css';

const LeftButton = (props) => {

    const {id, getUserInfo} = props;

    return (
        <div className={'leftButton'}>
            <button onClick={() => getUserInfo(id)}>
                User details
            </button>
        </div>

    );
};

export default LeftButton;