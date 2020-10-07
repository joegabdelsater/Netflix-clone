import React, { useState } from 'react';
import './MovieListItem.scss';
import { BsPlayFill, BsCheck } from "react-icons/bs";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

const MovieListItem = (props) => {


    const [makeLarge, setMakeLarge] = useState(false);
    const { thumb, showProgress } = props;


        let large = {
            height: 150,
            width: 265,
            left: 'initial',
            top: 'initial',
            position: 'relative',
            // transform:translate(0)
        };

        if (makeLarge) {
            large.height = 229;
            large.width = 400;
            large.top = '-50%';
            large.left = '-50%';
            large.position = 'absolute';
        }
  

    return (

        <div
            style={{
                position: makeLarge ? 'absolute' : 'relative',
                zIndex: makeLarge ? 9999 : 1,
                height: large.height,
                width: large.width
            }}
            onMouseEnter={(e) => {
                setMakeLarge(true)

            }}

            onMouseLeave={() => {
                setMakeLarge(false)
            }}
        >
            <div style={{
                height: large.height,
                width: large.width,
                left: large.left,
                top: large.top,
                position: large.position,
                transform: makeLarge ? 'translate(36%,25%)' : 'translate(0)',
                cursor: 'pointer'
            }}>

                {/* normal view */}
                <div className="thumb-container" style={{
                    backgroundImage: 'url(' + thumb + ')',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'contain',
                    height: large.height,
                    width: large.width,
                    left: large.left,
                    top: large.top,
                    // position: 'relative',
                    cursor: 'pointer'
                }}>
                    {/* <img src={thumb} className="thumb" style={large} /> */}
                    {showProgress === true && makeLarge !== true && <div className="progress-outer-new bar">
                        <div className="progress-inner bar">
                        </div>
                    </div>
                    }

                    {/* zoomed view */}

                </div>
                {makeLarge && <div className="cta-box">
                    <div className="button-container">
                        <div className="left">
                            <div className="cta-btn">
                                <BsPlayFill className="cta" />
                            </div>
                            <div className="cta-btn">
                                <BsCheck className="cta" />
                            </div>
                            <div className="cta-btn">
                                <FiThumbsUp className="cta" />
                            </div>
                            <div className="cta-btn">
                                <FiThumbsDown className="cta" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="cta-btn">
                                <RiArrowDownSLine className="cta" />
                            </div>
                        </div>
                    </div>

                    <p><span className="highlighted">S3:E5</span> "Episode 5"</p>

                    <div className="progress-large-container">
                        <div className="progress-outer bar">
                            <div className="progress-inner bar">
                            </div>
                        </div>
                        <p>47 of 56m</p>
                    </div>
                </div>}
            </div>
        </div>
    )

};

export default MovieListItem;


