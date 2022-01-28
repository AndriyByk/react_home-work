import React from 'react';

import Input from "./Input/Input";
import './Inputs.css';

const Inputs = ({register}) => {
    return (
        <div className={'inputs_wrapper'}>
            <div className={'inputs'}>
                <Input label={'Id: '} type={'number'} defaultValue={''} register={register} nameRegister={'id'}/>
                <Input label={'Model: '} type={'text'} defaultValue={''} register={register} nameRegister={'model'}/>
                <Input label={'Price: '} type={'number'} defaultValue={''} register={register} nameRegister={'price'}/>
                <Input label={'Year: '} type={'number'} defaultValue={''} register={register} nameRegister={'year'}/>
            </div>
        </div>
    );
};

export default Inputs;