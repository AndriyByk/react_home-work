import React from 'react';

import './../../pages/Home.css';

const Photo = ({photo}) => {

    return (
        <div className={'photo'}>
            <div className={'photo-info'}>№ {photo.id} (albumId: {photo.albumId})</div>
            <div className={'image'}>
                <img src={photo.url} alt={`№${photo.id}`}/>
            </div>
        </div>
    );
};

export default Photo;