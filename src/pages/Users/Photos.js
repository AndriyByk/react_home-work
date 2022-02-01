import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import Photo from "../../components/Photo/Photo";
import {photosService} from "../../services/photos.service";
import './../Home.css';

const Photos = () => {

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

export default Photos;