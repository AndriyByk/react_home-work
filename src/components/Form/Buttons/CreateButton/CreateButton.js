import React from 'react';

const CreateButton = ({create}) => {


    return (
        <div className={'button'}>
            <button onClick={() => create()}>
                Create
            </button>
        </div>
    );
};

export default CreateButton;