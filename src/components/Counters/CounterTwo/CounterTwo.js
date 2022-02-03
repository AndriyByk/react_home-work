import React from 'react';

import {Decrement, Increment, Reset} from "../../Buttons";
import './../Counters.css';

const CounterTwo = ({dispatch}) => {

    return (
        <div className={'counter'}>
            <div className={'counter-title'}>Counter two</div>
            <div className={'counter-buttons'}>
                <Increment dispatch={dispatch}/>
                <Decrement dispatch={dispatch}/>
                <Reset dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {CounterTwo};