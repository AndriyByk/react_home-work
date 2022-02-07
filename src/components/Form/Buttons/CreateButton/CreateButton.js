import React from 'react';
import {useDispatch} from "react-redux";

import './../../Form.css';
import {createCar} from '../../../../store/slices';

const CreateButton = ({handleSubmit}) => {

    const dispatch = useDispatch();

    const create_car = (data) => {
        dispatch(createCar({data}));
    }

    return (
        <div className={'button'}>
            <button onClick={handleSubmit(create_car)}>
                Create
            </button>
        </div>
    );
};

export {CreateButton};