import React from 'react';

import {SaveButton} from "../../Buttons";
import './../Forms.css';

const DogForm = ({dispatch}) => {

    const dogLogo = ' Dog';

    const saveToList = (e) => {
        e.preventDefault();
        dispatch({type: 'dog', payload: {id: new Date().getTime(), name: e.target[0].value}});
    }

    return (
        <div className={'form'}>
            <form onSubmit={saveToList}>
                <input type="text" name={'dogs'}/>
                <SaveButton logo={dogLogo}/>
            </form>
        </div>
    );
};

export {DogForm};