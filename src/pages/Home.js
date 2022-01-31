import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './Home.css';

const Home = () => {
    return (
        <div>
            <div className={'home-page'}>
                <div className={'link-home'}><Link to={'/'}>Home</Link></div>
                <div className={'link-users'}><Link to={'/users'}>Users</Link></div>
                <div className={'link-posts'}><Link to={'/posts'}>Posts</Link></div>
            </div>
            <div className={'wrapper'}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;