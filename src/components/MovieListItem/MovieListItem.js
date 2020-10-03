import React, { Component } from 'react';
import './MovieListItem.scss';
import { BsPlayFill, BsCheck } from "react-icons/bs";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";

class MovieListItem extends Component {
    ref = null;
    constructor() {
        super();
        this.state = {
            makeLarge: false
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.makeLarge !== nextState.makeLarge;
    }

    render() {
        const { thumb, showProgress } = this.props;

        let large = {
            height: 150,
            widht: 265,
            left: 'initial',
            top: 'initial',
            position: 'initial',
            // transform:translate(0)
        };

        if (this.state.makeLarge) {
            large.height = 229;
            large.width = 400;
            large.top = '-50%';
            large.left = '-50%';
            large.position = 'absolute';
        }
        return (
            <div
                style={{
                    position: this.state.makeLarge ? 'absolute' : 'relative',
                    zIndex: this.state.makeLarge ? 9999 : 1,
                    height: large.height,
                    width: large.width
                }}
                onMouseEnter={(e) => {
                        this.setState({ makeLarge: true })

                }}

                onMouseLeave={() => {
                        this.setState({ makeLarge: false })
                }}
            >
                <div style={{
                    height: large.height,
                    width: large.width,
                    left: large.left,
                    top: large.top,
                    position: large.position,
                    transform: this.state.makeLarge ? 'translate(36%,25%)' : 'translate(0)',

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
                        {showProgress === true && this.state.makeLarge !== true && <div className="progress-outer-new bar">
                            <div className="progress-inner bar">
                            </div>
                        </div>
                        }

                        {/* zoomed view */}

                    </div>
                    {this.state.makeLarge && <div className="cta-box">
                        <div class="button-container">
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
    }
};

export default MovieListItem;


