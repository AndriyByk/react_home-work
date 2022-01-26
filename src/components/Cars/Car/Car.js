import React from 'react';
import DeleteButton from "../../Form/Buttons/DeleteButton/DeleteButton";

const Car = ({car, delete_item}) => {
    const {id, model, price, year} = car;
    return (
        <div>
            <div>
                <div>{id}</div>
                <div>{model}</div>
                <div>{price}</div>
                <div>{year}</div>
            </div>
            <DeleteButton delete_item={delete_item} id={id}/>
        </div>
    );
};

export default Car;