import React from "react";
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import MovieListSection from '../components/MovieListSection/MovieListSection'
import '../App.scss';
const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <div className="movies-section">
                <MovieListSection />
            </div>
        </div>
    )
}

export default Home;