import React from 'react';
import {Link} from "react-router-dom";

import '../../pages/HomePage/HomePage.css';

const Album = ({album}) => {

    return (
        <div className={'album'}>
            <Link to={`photosOfAlbum${album.id}`}>
                <div>UserId: {album.userId}</div>
                <div>AlbumId: {album.id}</div>
                <div>Album title: {album.title}</div>
            </Link>
        </div>
    );
};

export {Album};