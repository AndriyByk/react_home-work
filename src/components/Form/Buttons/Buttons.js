import React from 'react';
import FilterButton from "./FilterButton/FilterButton";
import CreateButton from "./CreateButton/CreateButton";
import DeleteButton from "./DeleteButton/DeleteButton";
import UpdateButton from "./UpdateButton/UpdateButton";

const Buttons = (props) => {

    const {create, delete_item, update} = props;

    return (
        <div>
            <FilterButton/>
            <CreateButton create={create}/>
            <DeleteButton delete_item={delete_item}/>
            <UpdateButton update={update}/>
        </div>
    );
};

export default Buttons;