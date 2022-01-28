import React from 'react';

import './../../Form.css';

const FilterButton = ({filter, handleSubmit}) => {
    return (
        <div className={'button'}>
            <button onClick={handleSubmit(filter)}>
                Filter
            </button>
        </div>
    );
};

export default FilterButton;