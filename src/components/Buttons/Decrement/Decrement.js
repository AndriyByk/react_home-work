import React from 'react';

import './../Buttons.css';

const Decrement = ({dispatch}) => {

    const dec = () => {
        dispatch({type: 'dec'});
    }

    return (
        <div className={'button'}>
            <button className={'button'} onClick={dec}>
                Decrement
            </button>
        </div>
    );
};

export {Decrement};