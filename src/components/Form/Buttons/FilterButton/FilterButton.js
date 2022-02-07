import React from 'react';
import {useDispatch} from "react-redux";

import './../../Form.css';
import {filterCar} from '../../../../store/slices';

const FilterButton = ({handleSubmit}) => {

    const dispatch = useDispatch();

    const filter_car = (data) => {
        dispatch(filterCar({data}))
    }

    return (
        <div className={'button'}>
            <button onClick={handleSubmit(filter_car)}>
                Filter
            </button>
        </div>
    );
};

export {FilterButton};