import React, { useState } from 'react';
import './MovieListItem.scss';
import { BsPlayFill, BsCheck } from "react-icons/bs";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSpring, animated } from 'react-spring'

const MovieListItem = (props) => {


    const [makeLarge, setMakeLarge] = useState(false);
    const { thumb, showProgress } = props;

    let small = {
        height: 150,
        width: 265,
        left: '0',
        top: '0',
        position: 'relative',
        // transform:translate(0)
    };

    let large = {
        height: 229,
        width: 400,
        top: '-50%',
        left: '-50%',
        position: 'absolute'
    }

    let outerStyleSmall = {
        position: 'relative',
        zIndex: 1,
        height: small.height,
        width: small.width
    }

    let outerStyleLarge = {
        position: 'absolute',
        zIndex: 9999,
        height: large.height,
        width: large.width
    }

    let containerSmall = {
        height: small.height,
        width: small.width,
        transform: 'translate(0)',
        cursor: 'pointer'
    }

    let containerLarge = {
        height: large.height,
        width: large.width,
        left: large.left,
        top: large.top,
        position: large.position,
        transform: 'translate(36%,25%)',
        cursor: 'pointer'
    }

    let imageStyle = {
        backgroundImage: 'url(' + thumb + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        cursor: 'pointer'

    }

    let imageStyleSmall = {
        height: small.height,
        width: small.width,
        left: small.left,
        top: small.top,
    }

    let imageStyleLarge = {
        height: large.height,
        width: large.width,
        left: large.left,
        top: large.top,
    }

    if (makeLarge) {
        large.height = 229;
        large.width = 400;
        large.top = '-50%';
        large.left = '-50%';
        large.position = 'absolute';
    }

    const [imageAnim, setImageAnim] = useSpring(() => (imageStyleSmall))
    const [ctaAnim, setCtaAnim] = useSpring(() => ({ display: 'none', opacity: 0 }))
    const [buttons, setButtons] = useSpring(() => ({ opacity: 0 }))


    return (

        <div style={makeLarge ? outerStyleLarge : outerStyleSmall}
            onMouseEnter={(e) => {
                setCtaAnim({ display: 'block', opacity: 1, config: { duration: 200 } })
                setButtons({ opacity: 1 })
                setImageAnim(imageStyleLarge)
                setMakeLarge(true)

            }}

            onMouseLeave={() => {
                setImageAnim({ ...imageStyleSmall, config: { duration: 200 } })
                setButtons({ opacity: 0 , config: {duration: 200}})
                setCtaAnim({ display: 'none', opacity: 0 , config: {duration: 200}});
                setMakeLarge(false)
            }}
        >
            <div style={makeLarge ? containerLarge : containerSmall}>
                <div>
                    {/* normal view */}
                    <animated.div className="thumb-container" style={{
                        ...imageStyle,
                        //   ...(makeLarge? imageStyleLarge : imageStyleSmall)
                        ...imageAnim
                    }}>
                        {/* <img src={thumb} className="thumb" style={large} /> */}
                        {showProgress === true && makeLarge !== true && <div className="progress-outer-new bar">
                            <div className="progress-inner bar">
                            </div>
                        </div>
                        }

                        {/* zoomed view */}

                    </animated.div>
                    <animated.div className="cta-box" style={ctaAnim}>
                        <animated.div className="button-container" style={buttons}>
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
                        </animated.div>
                        <animated.div style={buttons}>
                            <p><span className="highlighted">S3:E5</span> "Episode 5"</p>

                            <div className="progress-large-container">
                                <div className="progress-outer bar">
                                    <div className="progress-inner bar">
                                    </div>
                                </div>
                                <p>47 of 56m</p>
                            </div>
                        </animated.div>
                    </animated.div>
                </div>
            </div>
        </div>
    )

};

export default MovieListItem;


