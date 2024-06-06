import React from "react";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <div className="go-top"><i className="fab fa-airbnb"></i></div>
            <div className="footer ptb-100 bg-f9faff">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                            <div className="footer-logo-area">
                                <img className="black-logo" src="assets/images/logo_2.png" alt="logo" />
                                <img className="black-logo-reform" src="assets/images/reform.png" alt="logo" />
                                {/* <img className="white-logo" src="assets/images/white-logo.png" alt="logo" /> */}
                                <p className="w-75" >Where Vision Meets Innovation. Crafting Tailored Software That Drives Business Success. Transform Your Ideas into Impactful Realities.

                                    .</p>
                                {/* <div className="footer-social-icons">
                                    <span>Follow Us:</span>
                                    <ul>
                                        <li><a href="https://www.facebook.com/" target="_blank"><i
                                            className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/" target="_blank"><i
                                            className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li><a href="https://www.instagram.com/" target="_blank"><i
                                            className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>

                        {/*<div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="footer-links footer-quick-links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="about.html" target="_blank"><i className="fas fa-angle-right"></i>
                                        <span>About</span></Link></li>
                                    <li><Link to="/services" target="_blank"><i className="fas fa-angle-right"></i> <span>Our
                                        Services</span></Link></li>
                                    <li><Link to="/case-study" target="_blank"><i className="fas fa-angle-right"></i>
                                        <span>Case Study</span></Link></li>
                                    <li><Link to="/our-team" target="_blank"><i className="fas fa-angle-right"></i> <span>Our
                                        Team</span></Link></li>
                                    <li><Link to="/blogs" target="_blank"><i className="fas fa-angle-right"></i> <span>Our
                                        Blog</span></Link></li>
                                </ul>
                            </div> 
                        </div>*/}
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="footer-links footer-contact-list">
                                <h3>Get In Touch</h3>
                                {/* <div className="footer-content-card">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <h5>Location:</h5>
                                    <p><a href="https://goo.gl/maps/LFFvE4dNnyq67gGeA">2976 Sunrise Avenue, Las Vegas, USA</a>
                                    </p>
                                </div> */}
                                <div className="footer-content-card">
                                    <i className="fas fa-envelope"></i>
                                    <h5>Email:</h5>
                                    <p><a
                                        href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#0f7c7a7f7f607d7b4f66756e61216c6062"><span
                                            className="__cf_email__"
                                            data-cfemail="483b3d3838273a3c0821322926662b2725">support@reformsol.com</span></a>
                                    </p>
                                </div>
                                <div className="footer-content-card">
                                    <i className="fas fa-mobile-alt"></i>
                                    <h5>Phone:</h5>
                                    <p><a href="tel:+13454567877">+1-3454-5678-77</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="footer-links footer-newsletter">
                                <h3>Subscribe</h3>
                                <p>Subscribe To Our Newsletter To Get Our Update News!</p>
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                        <button className="btn" type="submit"><i className="far fa-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="copyright bg-f9faff">
                <div className="container">
                    <p>Copyright @
                        <script data-cfasync="false"
                            src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                        <script>document.write(new Date().getFullYear())</script>. <strong>Izan</strong> All Rights Reserved By
                        <a target="_blank" href="https://hibootstrap.com/">HiBootstrap</a>
                    </p>
                </div>
            </div>
        </>
    );
}
export default Footer;
