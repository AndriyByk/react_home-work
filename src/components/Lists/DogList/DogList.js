import React from 'react';

import {Dog} from "../../Pets";
import './../Lists.css';

const DogList = ({state: {arrayOfDogs}, dispatch}) => {

    return (
        <div className={'list'}>
            Dogs:
            {
                arrayOfDogs.map(dog =>
                    <Dog key={dog.id} dog={dog} dispatch={dispatch}/>
                )
            }
        </div>
    );
};

export {DogList};