import React from 'react';

import '../Inputs.css';

const Input = (props) => {
    const {label, type, name, value, itemHandler} = props;
    return (
        <div className={'input-wrapper'}>
            <label>
                <div className={'form-item'}>
                    <div className={'label'}>
                        {label}
                    </div>
                    <div className={'input'}>
                        <input type={type} name={name} value={value} onChange={itemHandler}/>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default Input;