import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {

  return (
    <div className="App">
        <div className={"app-top"}>
            <Users/>
            <Posts/>
        </div>
        <div className={"app-bottom"}>
            <Comments/>
        </div>
    </div>
  );
}

export default App;
