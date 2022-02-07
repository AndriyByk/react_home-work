// additional part:
// * реализовать обновление машин
// ** добавить валидацыю к форме
// *** добавить еще 3 слайса для users, posts и comments
//    и реализовать роутинг между переключением по страницам UsersPage, PostsPage, CommentsPage, CarsPage
//    (c плейсхолдера достаточно просто вывести все по каждой сущности)

import {Route, Routes} from "react-router-dom";

import './App.css';
import {HomePage, UsersPage,PostsPage, CommentsPage, CarsPage} from "./pages";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<HomePage/>}>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
