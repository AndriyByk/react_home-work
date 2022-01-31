import {Route, Routes} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import UserDetails from "./pages/Users/UserDetails";
import PostDetails from "./pages/Posts/PostDetails";
import Comments from "./pages/Posts/Comments";
import UserPosts from "./pages/Users/UserPosts";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'/users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                    </Route>
                    <Route path={'/posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
