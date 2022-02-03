import React from 'react';

import {Cat} from "../../Pets";
import './../Lists.css';

const CatList = ({state: {arrayOfCats}, dispatch}) => {

    return (
        <div className={'list'}>
            Cats:
            {
                arrayOfCats.map(cat =>
                    <Cat key={cat.id} cat={cat} dispatch={dispatch}/>
                )
            }
        </div>
    );
};

export {CatList};