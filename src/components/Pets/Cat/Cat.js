import React from 'react';

import {DeleteButton} from "../../Buttons";
import './../Pets.css';

const Cat = ({cat, dispatch}) => {

    const code = 'Cat';

    return (
        <div className={'pet'}>
            <div className={'name'}>
                {cat.name}
            </div>
            <div className={'button-wrapper'}>
                <DeleteButton id={cat.id} dispatch={dispatch} code={code}/>
            </div>
        </div>
    );
};

export {Cat};