import './App.css';

import Posts from './components/Posts/Posts';
import Users from "./components/Users/Users";
import {useState} from "react";
import {userService} from "./services/user.service";

function App() {
    const [posts, setPosts] = useState([]);

    const getUserPosts = (userId) => {
       userService.getPostsOfUser(userId)
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
