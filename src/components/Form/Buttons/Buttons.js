import React from 'react';

import FilterButton from "./FilterButton/FilterButton";
import CreateButton from "./CreateButton/CreateButton";
import DeleteButton from "./DeleteButton/DeleteButton";
import UpdateButton from "./UpdateButton/UpdateButton";
import './../Form.css'

const Buttons = (props) => {
    const {update, create, delete_item, filter, handleSubmit} = props;
    return (
        <div className={'buttons'}>
            <FilterButton filter={filter} handleSubmit={handleSubmit}/>
            <CreateButton create={create} handleSubmit={handleSubmit}/>
            <DeleteButton delete_item={delete_item} handleSubmit={handleSubmit}/>
            <UpdateButton update={update} handleSubmit={handleSubmit}/>
        </div>
    );
};

export default Buttons;