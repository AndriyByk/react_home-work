import React from 'react';
import {Link} from "react-router-dom";

import '../../pages/HomePage/HomePage.css';

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={'user'}>
            <Link to={user.id.toString()} state={user}>
                {id}) {name}
            </Link>
            <Link to={`albumsOfUser${user.id}`}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export {User};