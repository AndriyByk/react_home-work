import React from 'react';

import './../Buttons.css';

const ResetButton = ({dispatch}) => {

    const reset = () => dispatch({type: 'deleteAll'});

    return (
        <div className={'button'}>
            <button className={'reset-button'} onClick={reset}>
                Reset
            </button>
        </div>
    );
};

export {ResetButton};