import React from 'react';

import './../../Form.css';

const UpdateButton = ({update, handleSubmit}) => {
    return (
        <div className={'button'}>
            <button onClick={handleSubmit(update)}>
                Update
            </button>
        </div>
    );
};

export default UpdateButton;