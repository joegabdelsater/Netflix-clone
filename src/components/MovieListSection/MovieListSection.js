import React from 'react';
import './MovieListSection.scss';
import MovieList from '../MovieList/MovieList';

const MovieListSection = () => {


    return (
        <div className="container">
            <div className="movie-list-container">
                <MovieList />
            </div>

            <div className="movie-list-container">
                <MovieList />
            </div>
            <div className="movie-list-container">
                <MovieList />
            </div>
            <div className="movie-list-container">
                <MovieList />
            </div>
            
        </div>
    )
}

export default MovieListSection