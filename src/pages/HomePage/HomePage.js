import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './HomePage.css';

const HomePage = () => {

    return (
        <div>
            <div className={'home-page'}>
                <div className={'link-home'}><Link to={'/'}>Home</Link></div>
                <div className={'link-cars'}><Link to={'/cars'}>Cars</Link></div>
                <div className={'link-users'}><Link to={'/users'}>Users</Link></div>
                <div className={'link-posts'}><Link to={'/posts'}>Posts</Link></div>
                <div className={'link-comments'}><Link to={'/comments'}>Comments</Link></div>
            </div>
            <div className={'wrapper'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {HomePage};