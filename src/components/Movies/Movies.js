import React, {useState} from 'react';
import {movieService} from "../../services/movie.service/movie.service";

const Movies = () => {

    const {movies, setMovies} = useState([]);

    const getAllMovies = () => {
        console.log("1")
        movieService.getAll().then(value => {
            value.results.map(value=> console.log(value))
            console.log("2")
        });
    }

    return (
        <div>
            <button onClick={getAllMovies}>Films</button>


            {/*{movies.results.map(movie =>*/}
            {/*        <div>*/}
            {/*            {movie}*/}
            {/*        </div>*/}
            {/*)}*/}
        </div>
    );
};

export default Movies;