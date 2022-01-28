import React from 'react';

import '../Cars.css';

const Car = ({car}) => {
    const {id, model, price, year} = car;
    return (
        <div className={'car'}>
            <div className={"car-id"}>{id}</div>
            <div className={"car-model"}>{model}</div>
            <div className={"car-year"}>Year: {year}</div>
            <div className={"car-price"}>Price: {price}</div>
        </div>
    );
};

export default Car;