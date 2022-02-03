import React from 'react';

import './../Buttons.css';

const DeleteButton = ({id, dispatch, code}) => {

    const deletePet = () => dispatch({type: `delete${code}`, payload: {id: id}});

    return (
        <div className={'button delete-button'}>
            <button onClick={deletePet}>
                Delete
            </button>
        </div>
    );
};

export {DeleteButton};