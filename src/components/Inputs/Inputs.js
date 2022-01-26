import React from 'react';
import Input from "./Input/Input";
import './Inputs.css';

const Inputs = (props) => {
    const {form, formHandler} = props;
    console.log(form);
    return (
        <div className={'inputs_wrapper'}>
            <div className={'inputs'}>
                <Input label={'Id: '} type={'number'} name={'id'} value={form.id} itemHandler={formHandler}/>
                <Input label={'Model: '} type={'text'} name={'model'} value={form.model}
                       itemHandler={formHandler}/>
                <Input label={'Price: '} type={'number'} name={'price'} value={form.price}
                       itemHandler={formHandler}/>
                <Input label={'Year: '} type={'number'} name={'year'} value={form.year}
                       itemHandler={formHandler}/>
            </div>
            <div>
                <ul>
                    <li>
                        <p>
                            If you want to find defined car you should fill the appropriate field and click "Filter".
                            When a field is filled with '0' it's not taken into account.
                        </p>
                    </li>
                    <li>
                        <p>
                            If you want to create a new car item you should fill all fields except id field and click
                            "Create".
                        </p>
                    </li>
                    <li>
                        <p>
                            If you want to delete a car item you have two options: you should fill id field with chosen id and click
                            "Delete" or you can click "Delete" in chosen car item field.
                        </p>
                    </li>
                    <li>
                        <p>
                            If you want to update car item you should: 1) fill id field with chosen id 2) fill other fields with appropriate info and click
                            "Update".
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Inputs;