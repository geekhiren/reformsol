import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function Header() {



    return (
        <>
            <ScrollToTop />
            <div className="header-area header-area-2">
                <div className="navbar-area">
                    <div className="main-responsive-nav">
                        <div className="container">
                            <div className="mobile-nav">
                                <Link to="/" className="logo">
                                    <img className="black-logo" src="assets/images/logo_2.png" alt="logo" />
                                    <img className="black-logo-reform" src="assets/images/reform.png" alt="logo" />
                                </Link>
                                <div className="menu-sidebar-1 menu-small-device">
                                    <div className="call-button">
                                        <i className="fas fa-headset"></i>
                                        <p>Have Any <span>Questions?</span></p>
                                        <a href="tel:+919512327005">+91 951-232-7005</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link className="navbar-brand" to="/">
                                    <img className="black-logo" src="assets/images/logo_2.png" alt="logo" />
                                    <img className="black-logo-reform" src="assets/images/reform.png" alt="logo" />
                                </Link>
                                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item plus-icon">
                                            <Link to={'/'} className="nav-link  ">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/services"} className="nav-link ">Services</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <Link to={"/our-team"} className="nav-link ">Our Team</Link>
                                        </li> */}
                                        {/* <li className="nav-item">
                                            <Link to={"/case-study"} className="nav-link ">Case Study</Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link to={"/blogs"} className="nav-link ">Blog</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/contact"} className="nav-link">Contact Us</Link>
                                        </li>
                                    </ul>
                                    <div className="menu-sidebar menu-sidebar-1">
                                        <Link className="default-button-3 default-button-3-h" to={"/contact"}>Get Started <i className="fas fa-long-arrow-alt-right"></i></Link>
                                        <div className="call-button">
                                            <i className="fas fa-headset"></i>
                                            <p>Have Any <span>Questions?</span></p>
                                            <a href="tel:+980045647823">+980-045-647-823</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;
