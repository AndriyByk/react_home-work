import React from 'react';

import './../../Form.css';

const DeleteButton = ({delete_item, handleSubmit}) => {
    return (
        <div className={'button'}>
            <button onClick={handleSubmit(delete_item)}>
                Delete
            </button>
        </div>
    );
};

export default DeleteButton;