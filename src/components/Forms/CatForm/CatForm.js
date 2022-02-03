import React from 'react';

import {SaveButton} from "../../Buttons";
import './../Forms.css';

const CatForm = ({dispatch}) => {

    const catLogo = ' Cat';

    const saveToList = (e) => {
        e.preventDefault();
        dispatch({type: 'cat', payload: {id: new Date().getTime(), name: e.target[0].value}});
    }

    return (
        <div className={'form'}>
            <form onSubmit={saveToList}>
                <input type="text" name={'cats'}/>
                <SaveButton logo={catLogo}/>
            </form>
        </div>
    );
};

export {CatForm};