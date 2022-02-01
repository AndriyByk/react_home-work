import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services";
import '../HomePage/HomePage.css';
import {Album} from "../../components";

const AlbumsPage = () => {

    const [albums, setAlbums] = useState([]);
    const {userId} = useParams();

    useEffect(()=> {
        albumService.getById(userId).then(value => setAlbums(value));
    },[userId]);

    return (
        <div className={'albums-wrapper'}>
            <div className={'albums'}>
                {albums.map(album =>
                        <Album key={album.id} album={album}/>
                )}
            </div>
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};