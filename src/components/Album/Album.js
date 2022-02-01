import React from 'react';
import {Link} from "react-router-dom";

import './../../pages/Home.css';

const Album = ({album}) => {

    return (
        <div className={'album'}>
            <Link to={`photosOfAlbum${album.id}`}>
            albumId-{album.id} (userId-{album.userId}) {album.title}
            </Link>
        </div>
    );
};

export default Album;