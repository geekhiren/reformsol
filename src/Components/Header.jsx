import React, { useState } from "react";
import { Link } from "react-router-dom";

import header_logo2 from "../assets/img/logo/mainLogo2.png"
import footer1_icon1 from "../assets/img/icons/footer1-icon1.png"
import footer1_icon2 from "../assets/img/icons/footer1-icon2.png"
import footer1_icon3 from "../assets/img/icons/footer1-icon3.png"
import footer1_icon4 from "../assets/img/icons/footer1-icon4.png"

import { getDataAction } from "../ReduxStore/actions/ExelDataActions";


import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";


function Header({ getDataAction, dataList }) {

    const [showMobileNavigation, setShowMobileNavigation] = useState(false)
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShowMobileNavigation(false)
    }, [pathname]);

    useEffect(() => {
        getDataAction()
    }, [])

    return (
        <>
            {/* <section>
                <div id="preloader">
                    <div id="ctn-preloader" className="ctn-preloader ctn-preloader1">
                        <div className="animation-preloader">
                            <div className="spinner"></div>
                            <div className="txt-loading">
                                <span data-text-preloader="T" className="letters-loading">
                                    T
                                </span>
                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>
                                <span data-text-preloader="C" className="letters-loading">
                                    C
                                </span>
                                <span data-text-preloader="H" className="letters-loading">
                                    H
                                </span>
                                <span data-text-preloader="X" className="letters-loading">
                                    X
                                </span>
                                <span data-text-preloader="E" className="letters-loading">
                                    E
                                </span>
                                <span data-text-preloader="N" className="letters-loading">
                                    N
                                </span>
                            </div>
                        </div>
                        <div className="loader-section-left loader-section section-left"></div>
                        <div className="loader-section-right loader-section section-right"></div>
                    </div>
                </div>
            </section> */}
            <header>
                <div className="header-area header-area2 header-area-all d-none d-lg-block" id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link to="/">
                                            <img src={header_logo2} alt="" />
                                        </Link>
                                    </div>

                                    <div className="main-menu-ex main-menu-ex1">
                                        <ul>

                                            <li><Link to="/">Home </Link></li>

                                            <li><Link to="/about">About</Link></li>

                                            <li><Link to="/services">Service</Link></li>

                                            <li><Link to="/blogs">Blog</Link></li>

                                            <li><Link to="/project">Project</Link></li>

                                        </ul>
                                    </div>

                                    <div className="header2-buttons">

                                        <div className="header-search-form-wrapper">
                                            <div className="tx-search-close tx-close"><i className="fa-solid fa-xmark"></i></div>
                                            <div className="header-search-container">
                                                <form role="search" className="search-form">
                                                    <input type="search" className="search-field" placeholder="Search …" name="s" />
                                                    <button type="submit" className="search-submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="body-overlay"></div>
                                        <div className="button">
                                            <Link className="theme-btn2" to="/contact">Get A Quote
                                                <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span>
                                                <span className="arrow2"><i className="fa-solid fa-arrow-right"></i></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="mobile-header mobile-header-main d-block d-lg-none ">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link to="/"><img src={header_logo2} alt="" /></Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={() => { setShowMobileNavigation(true) }}>
                                <i className="fa-duotone fa-bars-staggered"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar d-block d-lg-none ${showMobileNavigation ? 'mobile-menu-active' : ''}`}>
                <div className="logo-m">
                    <Link to="/"><img src={header_logo2} alt="" /></Link>
                </div>
                <div className="menu-close">
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="mobile-nav">

                    <ul>
                        <li><Link to="/">Home </Link></li>

                        <li><Link to="/about">About</Link></li>

                        <li><Link to="/services">Service</Link></li>

                        <li><Link to="/blogs">Blog</Link></li>

                        <li><Link to="/project">Project</Link></li>
                    </ul>

                    <div className="mobile-button">
                        <Link className="theme-btn2" to="/services">Learn More <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                    </div>

                    <div className="single-footer-items">
                        <h3>Contact Us</h3>

                        <div className="contact-box">
                            <div className="icon">
                                <img src={footer1_icon1} alt="" />
                            </div>
                            <div className="pera">
                                <a href="tel:0500222333">0500 222 333</a>
                            </div>
                        </div>

                        <div className="contact-box">
                            <div className="icon">
                                <img src={footer1_icon2} alt="" />
                            </div>
                            <div className="pera">
                                <a href="tel:0356588547">03 5658 8547</a>
                            </div>
                        </div>

                        <div className="contact-box">
                            <div className="icon">
                                <img src={footer1_icon3} alt="" />
                            </div>
                            <div className="pera">
                                <a href="mailto:admin@reformsol.com">admin@reformsol.com</a>
                            </div>
                        </div>

                        <div className="contact-box">
                            <div className="icon">
                                <img src={footer1_icon4} alt="" />
                            </div>
                            <div className="pera">
                                <a href="mailto:admin@reformsol.com">www.reformsol.com</a>
                            </div>
                        </div>

                    </div>

                    <div className="contact-infos">
                        <h3>Our Location</h3>
                        <ul className="social-icon">
                            <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                            <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                            <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                            <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    );
}
const mapStateToProps = (state) => {
    return {
        dataList: state.ExelDataReducer
    };
};

export default connect(mapStateToProps, { getDataAction })(Header);

