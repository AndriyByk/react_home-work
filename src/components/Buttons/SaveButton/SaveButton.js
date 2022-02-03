import React from 'react';

import './../Buttons.css';

const SaveButton = ({logo}) => {
    return (
        <div className={'button save-button'}>
            <button>
                Save{logo}
            </button>
        </div>
    );
};

export {SaveButton};