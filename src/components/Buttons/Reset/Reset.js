import React from 'react';

import './../Buttons.css';

const Reset = ({dispatch}) => {

    const reset = () => {
        dispatch({type: 'reset', payload: 0});
    }

    return (
        <div className={'button'}>
            <button className={'button'} onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export {Reset};