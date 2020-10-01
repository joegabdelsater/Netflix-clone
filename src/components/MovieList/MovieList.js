import React, { Component } from 'react';
import './MovieList.scss';
import Slider from "react-slick";
import "./slick.scss";
import "./slick-theme.scss";
import friends from '../../images/friends.jpg';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


class MovieList extends Component {
    slider = null;

    SampleNextArrow = () => {

        return (
            <div className="arrow-container arrow-right" onClick={() => this.slider.slickNext()} >
                <MdKeyboardArrowRight className="arrow" />
            </div>
        );
    }

    SamplePrevArrow = () => {
        return (
            <div className="arrow-container arrow-left" onClick={() => this.slider.slickPrev()} >
                <MdKeyboardArrowLeft className="arrow" />
            </div>
        );
    }

    render() {
        const settings = {
            speed: 100,
            slidesToShow: 6,
            nextArrow: this.SampleNextArrow(),
            prevArrow: this.SamplePrevArrow()
        };

        return (
            <div className="list">
                <h3 className="title">Continue watching for Joe</h3>
                <div style={{position:'relative'}}>
                    <Slider {...settings} ref={c => (this.slider = c)}>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                        <div>
                            <img src={friends} className="thumb" />
                        </div>
                    </Slider>
                    {this.SampleNextArrow()}
                    {this.SamplePrevArrow()}
                </div>

            </div>

        );
    }
}

//     return (
//         <div>
//            

//             <div className="slider">

//             </div>
//         </div>
//     )
// }

export default MovieList;