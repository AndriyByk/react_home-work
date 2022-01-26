import React from 'react';

const UpdateButton = ({update}) => {
    return (
        <div className={'button'}>
            <button onClick={()=> update()}>
                Update
            </button>
        </div>
    );
};

export default UpdateButton;