import React from 'react';

import '../Cars.css';
import {DeleteButton} from "../../Form/Buttons/DeleteButton/DeleteButton";
import {EditButton} from "../../Form/Buttons/EditButton/EditButton";

const Car = ({car}) => {

    const {id, model, price, year} = car;

    return (
        <div className={'car'}>
            <div className={"car-id"}>{id}</div>
            <div className={"car-model"}>{model}</div>
            <div className={"car-year"}>Year: {year}</div>
            <div className={"car-price"}>Price: {price}</div>
            <DeleteButton id={id}/>
            <EditButton car={car}/>
        </div>
    );
};

export {Car};