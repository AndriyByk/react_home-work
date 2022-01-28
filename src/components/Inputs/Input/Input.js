import React from 'react';

import '../Inputs.css';

const Input = (props) => {
    const {label, type, defaultValue, register, nameRegister} = props;
    return (
        <div className={'input-wrapper'}>
            <label>
                <div className={'form-item'}>
                    <div className={'label'}>
                        {label}
                    </div>
                    <div className={'input'}>
                        <input type={type} defaultValue={defaultValue} {...register(nameRegister)}/>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default Input;