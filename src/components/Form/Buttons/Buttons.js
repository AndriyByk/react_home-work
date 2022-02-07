import React from 'react';

import {FilterButton} from "./FilterButton/FilterButton";
import {CreateButton} from "./CreateButton/CreateButton";
import {UpdateButton} from "./UpdateButton/UpdateButton";
import './../Form.css'

const Buttons = (props) => {

    const {handleSubmit} = props;

    return (
        <div className={'buttons'}>
            <FilterButton handleSubmit={handleSubmit}/>
            <CreateButton handleSubmit={handleSubmit}/>
            <UpdateButton handleSubmit={handleSubmit}/>
        </div>
    );
};

export {Buttons};