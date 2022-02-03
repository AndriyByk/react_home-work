import React from 'react';

import {Decrement, Increment, Reset} from "../../Buttons";
import './../Counters.css';

const CounterOne = ({dispatch}) => {

    return (
        <div className={'counter'}>
            <div className={'counter-title'}>Counter One</div>
            <div className={'counter-buttons'}>
                <Increment dispatch={dispatch}/>
                <Decrement dispatch={dispatch}/>
                <Reset dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {CounterOne};