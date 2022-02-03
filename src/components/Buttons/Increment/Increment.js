import React from 'react';

import './../Buttons.css';

const Increment = ({dispatch}) => {

    const inc = () => {
        dispatch({type: 'inc'});
    }

    return (
        <div>
            <button className={'button'} onClick={inc}>
                Increment
            </button>
        </div>
    );
};

export {Increment};