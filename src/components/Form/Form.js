import React from 'react';

import Inputs from "../Inputs/Inputs";
import Buttons from "./Buttons/Buttons";
import './Form.css';

const Form = (props) => {
    const {update, create, delete_item, filter, register, handleSubmit} = props;
    return (
        <div className={'form'}>
            <form>
                <Inputs register={register}/>
                <Buttons create={create} update={update} delete_item={delete_item} filter={filter} handleSubmit={handleSubmit}/>
            </form>
            <div className={'documentation'}>
                <div className={'documentation-title'}>
                    Documentation:
                </div>
                <div className={'documentation-propositions'}>
                    <ul>
                        <li>
                            If you want to find defined car (or just filter all cars) you should fill the appropriate field(s) and click "Filter".
                        </li>
                        <li>
                            If you want to create a new car item you should fill all fields except id field and click
                            "Create".
                        </li>
                        <li>
                            If you want to delete a car item you should fill id field with chosen
                            id and click "Delete".
                        </li>
                        <li>
                            If you want to update car item you should: 1) fill id field with chosen id 2) fill other
                            fields with appropriate info and click
                            "Update".
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Form;