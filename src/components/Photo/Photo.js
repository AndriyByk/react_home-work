import React from 'react';

import './../../pages/Home.css';

const Photo = ({photo}) => {

    return (
        <div className={'photo'}>
            <div className={'photo-info'}>
                <div className={'photo-id'}>PhotoId: {photo.id}</div>
                <div className={'album-id'}>AlbumId: {photo.albumId}</div>
                <div className={'photo-title'}>Photo title: {photo.title})</div>
            </div>
            <div className={'photo-image'}>
                <img src={photo.url} alt={`№${photo.id}`}/>
            </div>
        </div>
    );
};

export default Photo;