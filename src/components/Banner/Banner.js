import React from 'react';
import './Banner.scss';
import { FaPlay } from "react-icons/fa";
import {AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <img src="https://occ-0-3355-778.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeYnTk3WfujxMQ1liNW2oq0jWTKTK0_uVrQhvjUEcBKcUsRJQNqTkINKMGXOw4sDAy_DtRsbO6y5bcbh_mq4zT1XQJBS.webp?r=311" />

            <div className="container">
                <div className="details-section">
                    <h1>modern<span id="title-red">family</span></h1>
                    <div className="title">
                        <div className="top-box">
                            <p>TOP</p>
                            <p>10</p>
                        </div>
                        <p className="title">#7 in TV Shows Today</p>
                    </div>

                    <div className="description">
                        <p>What does it take to keep a 21st-century family going strong? Same thing as always: laughter and love</p>
                    </div>

                    <div className="button-container">
                        <a href="" id="play">
                            <FaPlay style={{ marginRight: 10 }} /> Play </a>

                        <a href="" id="info">
                            <AiOutlineInfoCircle style={{ marginRight: 10, fontSize: 30 }} /> More Info</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;