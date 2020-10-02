import React from 'react';
import './MovieListSection.scss';
import MovieList from '../MovieList/MovieList';

const MovieListSection = () => {


    return (
        <div className="container">
            <div className="movie-list-container">
                <MovieList showProgress={true} title="Continue watching for Joe"/>
            </div>

            <div className="movie-list-container">
                <MovieList title="TV Shows"/>
            </div>
            <div className="movie-list-container">
                <MovieList title="Trending Now" />
            </div>
            <div className="movie-list-container">
                <MovieList title="Watch It Again"/>
            </div>
            
        </div>
    )
}

export default MovieListSection