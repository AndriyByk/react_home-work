import React from 'react';

import {DeleteButton} from "../../Buttons";
import './../Pets.css';

const Dog = ({dog, dispatch}) => {

    const code = 'Dog';

    return (
        <div className={'pet'}>
            <div className={'name'}>
                {dog.name}
            </div>
            <div className={'button-wrapper'}>
                <DeleteButton id={dog.id} dispatch={dispatch} code={code}/>
            </div>
        </div>
    );
};

export {Dog};