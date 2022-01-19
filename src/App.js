import './App.css';

import Posts from './components/Posts/Posts';
import Users from "./components/Users/Users";
import {useState} from "react";

function App() {
    const [posts, setPosts] = useState([]);

    const getUserPosts = (userId) => {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(value => value.json())
            .then(value => setPosts(value))
    }

    return (
        <div className="App">
            <Users getUserPosts={getUserPosts}/>

            <Posts posts={posts}/>
        </div>
    );
}

export default App;
