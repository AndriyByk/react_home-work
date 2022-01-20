import React from 'react';

import '../../App.css';

const Input = (props) => {
    const {label, name, value, itemHandler} = props;

    return (
        <div className={'input'}>
            <label>{label}<input type="text" name={name} value={value} onChange={itemHandler}/></label>
        </div>
    );
};

export default Input;