import React, { useState, useEffect } from 'react';
import './MovieListSection.scss';
import MovieList from '../MovieList/MovieList';

const MovieListSection = () => {

    const [data , setData] = useState([
        {
            id: '1',
            title: 'Continue watching for Joe',
            showProgress: true,
            zindex: 1
        },
        {
            id: '2',
            title: 'TV Shows',
            showProgress: false,
            zindex:1
        },
        {
            id: '3',
            title: 'Trending Now',
            showProgress: false,
            zindex:1

        },
        {
            id: '4',
            title: 'Watch It Again',
            showProgress: false,
            zindex:1
        },
    ])

    useEffect(() => {}, [setData]);
    const setIndex = (i, priority) => {
        let dataCopy = data;
        dataCopy[i].zindex = priority? 9999 : 1;
        setData([... dataCopy]);
    }
    
    console.log('rerendered');
    return (
        <div className="container">
            {data.map((res, i) => {
                return <div key={res.id} className="movie-list-container" allowLarge={i == 1} style={{ zIndex: res.zindex }}
                    onMouseEnter={() =>  setIndex(i,true) }
                    onMouseLeave={() =>  setIndex(i,false)}
                >
                    <MovieList showProgress={res.showProgress} title={res.title}/>
                </div>
            })}
        </div>
    )
}

export default MovieListSection