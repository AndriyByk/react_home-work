import React from 'react';
import Car from "./Car/Car";

const Cars = ({allCars, delete_item}) => {
    // console.log(cars);
    return (
        <div className={'cars'}>
            {allCars.map(car =>
                <Car key={car.id} car={car} delete_item={delete_item}/>
            )}
        </div>
    );
};

export default Cars;