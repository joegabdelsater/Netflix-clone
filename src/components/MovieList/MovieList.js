import React, { Component } from 'react';
import './MovieList.scss';
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import friends from '../../images/friends.jpg';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {
    slider = null;

    constructor() {
        super();
        this.state = {
            showNavCtrl: false,
            positionData: null,
            modalVisible: false
        }
    }

    SampleNextArrow = () => {
        if (this.state.showNavCtrl) {
            return (
                <div className="arrow-container arrow-right" onClick={() => this.slider.slickNext()} >
                    <MdKeyboardArrowRight className="arrow" />
                </div>
            );
        } else {
            return;
        }
    }

    SamplePrevArrow = () => {
        if (this.state.showNavCtrl) {
            return (
                <div className="arrow-container arrow-left" onClick={() => this.slider.slickPrev()} >
                    <MdKeyboardArrowLeft className="arrow" />
                </div>
            );
        } else {
            return;
        }
    }

    handleHover = (show) => {
        this.setState({ showNavCtrl: show });
    }

    // handleModal = (positionData) => {
    //     if (this.state.positionData !== null) {
    //         this.setState({ positionData: null })
    //     }
    //     this.setPositionData(positionData);
    // }

    // setPositionData = (positionData) => {
    //     this.setState({ modalVisible: positionData !== null })
    //     var that = this;
    //     setInterval(function () {
    //         that.setState({ positionData });
    //     }, 200)
    // }

    // showModal = () => {
    //     if (this.state.modalVisible) {
    //         console.log(this.state.positionData)
    //         return <div src="https://picsum.photos/280/158" style={{
    //             height: 500,
    //             width: 500,
    //             zIndex: 10,
    //             // position: 'absolute',
    //             // top: this.state.positionData.top - 300,
    //             // left: this.state.positionData.left,
    //             backgroundColor: 'red'
    //         }} ></div>
    //     } else {
    //         return false;
    //     }
    // }
    render() {
        const { showProgress, title } = this.props;
        const settings = {
            speed: 100,
            slidesToShow: 6,
            nextArrow: this.SampleNextArrow(),
            prevArrow: this.SamplePrevArrow()
        };

        return (
            <div className="list">
                <h3 className="title">{title}</h3>
                <div style={{ position: 'relative' }} onMouseEnter={() => this.handleHover(true)} onMouseLeave={() => this.handleHover(false)}>
                    <Slider {...settings} ref={c => (this.slider = c)}>
                        <MovieListItem thumb={'https://picsum.photos/280/158?' + Math.random()} showProgress={showProgress} handleModal={this.handleModal} />
                        <MovieListItem thumb={'https://picsum.photos/280/158?' + Math.random()} showProgress={showProgress} handleModal={this.handleModal} />
                        <MovieListItem thumb={'https://picsum.photos/280/158?' + Math.random()} showProgress={showProgress} handleModal={this.handleModal} />
                        <MovieListItem thumb={'https://picsum.photos/280/158?' + Math.random()} showProgress={showProgress} handleModal={this.handleModal} />
                        <MovieListItem thumb={'https://picsum.photos/280/158?' + Math.random()} showProgress={showProgress} handleModal={this.handleModal} />
                        <MovieListItem thumb={'https://picsum.photos/280/158?' + Math.random()} showProgress={showProgress} handleModal={this.handleModal} />
                        <MovieListItem thumb={'https://picsum.photos/280/158?' + Math.random()} showProgress={showProgress} handleModal={this.handleModal} />
                    </Slider>

                    {this.SampleNextArrow()}
                    {this.SamplePrevArrow()}
                </div>
                {/* { this.showModal()} */}
            </div>

        );
    }
}


export default MovieList;