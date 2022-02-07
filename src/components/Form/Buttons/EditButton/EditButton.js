import React from 'react';
import {useDispatch} from "react-redux";

import {mediateCarForEd} from '../../../../store/slices';

const EditButton = ({car}) => {

    const dispatch = useDispatch();

    const edit_car = () => {
        dispatch(mediateCarForEd({car}));
    }

    return (
        <div>
            <div className={'button'}>
                <button onClick={edit_car}>
                    Edit
                </button>
            </div>
        </div>
    );
};

export {EditButton};