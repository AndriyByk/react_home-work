import React from 'react';
import {useDispatch} from "react-redux";

import {removeCar} from '../../../../store/slices';
import './../../Form.css';

const DeleteButton = ({id}) => {

    const dispatch = useDispatch();

    const remove_car = () => {
        dispatch(removeCar({id}))
    }

    return (
        <div className={'button'}>
            <button onClick={remove_car}>
                Delete
            </button>
        </div>
    );
};

export {DeleteButton};