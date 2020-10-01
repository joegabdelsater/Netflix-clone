import React, { Component } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FaSearch, } from "react-icons/fa";
import { FiGift, FiBell } from "react-icons/fi";
import { AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import "./Header.scss";

class Header extends Component {
    constructor() {
        super();
        this.state = {
            backgroundColor: 'transparent',
            showProfile: false,
            onProfile: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        this.setState({ backgroundColor: window.scrollY > 4 ? '#141414' : 'transparent' })
    }

    showProfileDropDown = () => {
        this.setState({ showProfile: true });
    }

    onProfileDropDown = (onProfile) => {
        this.setState({ onProfile })
    }

    hideProfileDropDown = () => {
        var that = this;
        setTimeout(function () {
            if (!that.state.onProfile) {
                that.setState({ showProfile: false });
            }
        }, 500)
    }

    render() {
        return (
            <>
                <div className="menu-bar-container">
                    <div className="menu-bar" style={{ backgroundColor: this.state.backgroundColor }}>
                        <div className="nav-bar" >
                            <div className="menu-bar" >
                                <Link to="/" className="logo">NETFLIX</Link>

                                <div className="menu-items">
                                    <div className="menu-left">
                                        <Link to="/" >Home</Link>
                                        <Link to="/" >TV Shows</Link>
                                        <Link to="/" >Movies</Link>
                                        <Link to="/" >Latest</Link>
                                        <Link to="/" >My List</Link>
                                    </div>

                                    <div className="menu-right">
                                        <Link to="/" >
                                            <FaSearch className="icon" />
                                        </Link>
                                        <Link to="/" id="kids">KIDS</Link>
                                        <Link to="/" >
                                            <FiGift className="icon" />
                                        </Link>
                                        <Link to="/" >
                                            <FiBell className="icon" />
                                        </Link>

                                        <div className="account-box"
                                            onMouseOver={() => this.showProfileDropDown()}
                                            onMouseLeave={() => this.hideProfileDropDown()}
                                        >
                                            <img src="https://occ-0-3355-778.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbU3UHUlkChqMS0UORybrasISolcRmk12xz3v84eycdFXFb0OpRQn-eS1DPXHPfnedUm2GsZylJOXOpNbDjSDMw.png?r=a41" alt="" />

                                            <AiFillCaretDown className="carret" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.showProfile && <div className="profile-dropdown"
                        onMouseOver={() => this.onProfileDropDown(true)}
                        onMouseLeave={() => {
                            this.onProfileDropDown(false)
                            this.hideProfileDropDown();
                        }}
                    >
                      
                        <div className="users-account-container">
                        <AiFillCaretUp style={{position:'absolute', top:-12,right: 10, color: 'white'}}/>
                            <ul>
                                <li>
                                    <Link className="user-account">
                                        <img src="https://occ-0-3355-778.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABbU3UHUlkChqMS0UORybrasISolcRmk12xz3v84eycdFXFb0OpRQn-eS1DPXHPfnedUm2GsZylJOXOpNbDjSDMw.png?r=a41" />
                                        <p>Joe</p>
                                    </Link>
                                </li>

                                <li>
                                    <Link className="user-account">
                                        <img src="https://occ-0-3355-778.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRkz_GVHSZ0XGP-9Z2JnI8_XqAPtrFIOAK7MqDUMDUztKWq71vsqKWjnWB5iHQ7QL2k3miI-alyYWDKBqCf7_WA.png?r=f71" />
                                        <p>Jihane</p>
                                    </Link>
                                </li>

                            </ul>

                            <div className="account-dropdown-container">
                                <Link>Manage Profiles</Link>
                            </div>
                        </div>

                        <div className="users-account-container">
                            <div className="account-dropdown-container">
                                <Link>Account</Link>
                                <Link>Help Center</Link>
                                <Link>Sign out of Netflix</Link>
                            </div>
                        </div>
                    </div>}
                </div>

            </>

        )
    }
}

export default Header;