import React, { Component } from 'react';
import './MovieListItem.scss';


class MovieListItem extends Component {
    ref = null;

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const { thumb, showProgress } = this.props;
        return (
            <div
                // onMouseEnter={(e) => {
                //     console.log('in')
                //     this.props.handleModal(this.ref.getBoundingClientRect())
                // }}
                // ref={ref => this.ref = ref}
                // onMouseLeave={() => {
                //     console.log('out')
                //     this.props.handleModal(null)
                // }}
            >
                <img src={thumb} className="thumb" />
                {showProgress === true && <div className="progress-outer bar">
                    <div className="progress-inner bar">
                    </div>
                </div>
                }
            </div>
        )
    }
};

export default MovieListItem;


