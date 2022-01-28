import React from 'react';

import Car from "./Car/Car";
import './Cars.css';

const Cars = ({allCars, delete_item, handleSubmit}) => {
    return (
        <div className={'cars'}>
            {allCars.map(car =>
                <Car key={car.id} car={car} delete_item={delete_item} handleSubmit={handleSubmit}/>
            )}
        </div>
    );
};

export default Cars;