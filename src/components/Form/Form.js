import React from 'react';
import Inputs from "../Inputs/Inputs";
import Buttons from "./Buttons/Buttons";

const Form = (props) => {
    const {filter, create, delete_item, update, form, formHandler} = props;
    // console.log(filter);
    return (
        <div className={'form'}>
            <form onSubmit={filter}>
                <Inputs form={form} formHandler={formHandler}/>
                <Buttons create={create} delete_item={delete_item} update={update} form={form}/>
            </form>
        </div>
    );
};

export default Form;