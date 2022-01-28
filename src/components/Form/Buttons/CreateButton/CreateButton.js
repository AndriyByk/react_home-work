import React from 'react';

import './../../Form.css';

const CreateButton = ({create, handleSubmit}) => {
    return (
        <div className={'button'}>
            <button onClick={handleSubmit(create)}>
                Create
            </button>
        </div>
    );
};

export default CreateButton;