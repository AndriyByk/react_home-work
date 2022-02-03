import React from 'react';

import './State.css';

const State = ({state : {counter}}) => {

    return (
        <div className={'state-wrapper'}>
            <div className={'state'}>
                State value: {counter}
            </div>
        </div>
    );
};

export default State;