import React from 'react';

import '../../../../../App.css';

const RightButton = (props) => {

    const {id, getUserPosts} = props;

    return (
        <div className={'rightButton'}>
            <button onClick={() => getUserPosts(id)}>
                Posts
            </button>
        </div>
    );
};

export default RightButton;