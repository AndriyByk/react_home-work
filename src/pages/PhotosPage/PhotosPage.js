import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photosService} from "../../services";
import '../HomePage/HomePage.css';
import {Photo} from "../../components";

const PhotosPage = () => {

    const[photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(()=> {
        photosService.getById(albumId.toString()).then(value => setPhotos(value));
    },[albumId]);

    return (
        <div className={'photos'}>
            {photos.map(photo =>
                <Photo key={photo.id} photo={photo}/>
            )}
        </div>
    );
};

export {PhotosPage};