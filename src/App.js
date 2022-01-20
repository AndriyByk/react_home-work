import {useEffect, useState} from "react";

import './App.css';
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import {userService} from "./services/user.service";
import User from "./components/User/User";

function App() {
    const [allUsers, setAllUsers] = useState([]);
    const [allUsersInitial, setAllUsersInitial] = useState([]);

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        userService.getAll()
            .then(value => {
                setAllUsers(value);
                setAllUsersInitial(value);
            });
    }, []);

    const find = (e) => {
        e.preventDefault();
        setAllUsers(allUsersInitial.filter(value => {
            return (value.name.toUpperCase().includes(name.toUpperCase())
                && value.username.toUpperCase().includes(userName.toUpperCase())
                && value.email.includes(email));
        }));
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const userNameHandler = (e) => {
        setUserName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="App">
            <form onSubmit={find}>
                <div className={'inputs'}>
                    <Input label={'Name: '} name={'name'} value={name} itemHandler={nameHandler}/>
                    <Input label={'Username: '} name={'userName'} value={userName} itemHandler={userNameHandler}/>
                    <Input label={'Email: '} name={'email'} value={email} itemHandler={emailHandler}/>
                    <Button/>
                </div>
            </form>
            <div className={'users'}>
                {allUsers.map(value => <User key={value.id} user={value}/>)}
            </div>
        </div>
    );
}

export default App;
