import React from "react";
import { Link } from "react-router-dom";
import header_logo2 from "../assets/img/logo/mainLogo2.png"
import footer1_icon1 from "../assets/img/icons/footer1-icon1.png"
import footer1_icon2 from "../assets/img/icons/footer1-icon2.png"
import footer1_icon3 from "../assets/img/icons/footer1-icon3.png"
import footer1_icon4 from "../assets/img/icons/footer1-icon4.png"
function Footer() {
    return (
        <>
            <div className="bottom-circle">
                <div className="cta2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 m-auto text-center"  data-aos="fade-up" data-aos-duration="900">
                                <div className="heading2">
                                    <h2 className="title tg-element-title"> We're Committed To Businesses</h2>
                                    <div className="space16"></div>
                                    <p>At Reformsol IT Solutions, we're dedicated to delivering innovative technology solutions tailored to meet
                                        the unique needs of businesses like yours. </p>
                                    <div className="row">
                                        <div className="col-lg-8 m-auto">
                                            <div className="subscribe-form">
                                                <form action="#">
                                                    <input type="email" placeholder="Enter Your Email" />
                                                    <div className="button">
                                                        <button type="submit" className="theme-btn2">Subscribe <span className="arrow1"><i
                                                            className="fa-solid fa-arrow-right"></i></span><span className="arrow2"><i
                                                                className="fa-solid fa-arrow-right"></i></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer2 _relative">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-footer-items footer-logo-area">
                                    <div className="footer-logo">
                                        <Link to="/">
                                            <img src={header_logo2} alt="" />
                                        </Link>
                                    </div>
                                    <div className="space20"></div>
                                    <div className="heading2">
                                        <p>At Reformsol IT Solutions, we're dedicated to delivering innovative technology solutions tailored to meet
                                            the unique needs of businesses like yours. </p>
                                    </div>
                                    <ul className="social-icon">
                                        <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg col-md-6 col-12">
                                <div className="single-footer-items">
                                    <h3>Service We Offer</h3>

                                    <ul className="menu-list">
                                        <li><Link href="#">Cloud Computing Solution</Link></li>
                                        <li><Link href="#">Cybersecurity & Compliance</Link></li>
                                        <li><Link href="#">Software Development</Link></li>
                                        <li><Link href="#">It Consulting & Support</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg col-md-6 col-12">
                                <div className="single-footer-items pl-5">
                                    <h3>Useful Links</h3>

                                    <ul className="menu-list">
                                        <li><Link to="/about">About Us </Link></li>
                                        <li><Link to="/services">Our Services</Link></li>
                                        <li><Link to="/blogs">Blog & News</Link></li>
                                        <li><Link to="/contact">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-12">
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
                            </div>

                        </div>

                        <div className="space70"></div>
                    </div>

                    <div className="copyright-area _relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <div className="coppyright">
                                        <p>Copyright @2025 reformsol.All Rights Reserved</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="coppyright right-area">
                                        <Link to="#">Terms & Conditions</Link>
                                        <Link to="#">Privacy Policy</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="arrow-up"><i className="fa-solid fa-arrow-up"></i></a>
                    </div>

                </div>

            </div>
        </>
    );
}
export default Footer;
