import React from 'react';

const DeleteButton = ({delete_item, id}) => {
    return (
        <div className={'button'}>
            <button onClick={()=> delete_item(id)}>
                Delete
            </button>
        </div>
    );
};

export default DeleteButton;