import React, {useEffect, useState} from 'react';

import UserLeft from './User_left/UserLeft';
import '../../../App.css';

const Short = ({getUserInfo}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);

    return (
        <div className={'short'}>
            {users.map((value) =>
                <UserLeft key={value.id} name={value.name} id={value.id} getUserInfo={getUserInfo}/>
            )}
        </div>
    );
};

export default Short;