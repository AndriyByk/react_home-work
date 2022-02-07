import React from 'react';
import {useDispatch} from "react-redux";

import './../../Form.css';
import {editCar} from '../../../../store/slices';

const UpdateButton = ({handleSubmit}) => {

    const dispatch = useDispatch();

    const update_car = (data) => {
        dispatch(editCar({data}))
    }

    return (
        <div className={'button'}>
            <button onClick={handleSubmit(update_car)}>
                Update
            </button>
        </div>
    );
};

export {UpdateButton};