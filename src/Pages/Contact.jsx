import React from "react";
import { Link } from "react-router-dom";
import contact_page_icon1 from "../assets/img/icons/contact-page-icon1.png"
import contact_page_icon2 from "../assets/img/icons/contact-page-icon2.png"
import contact_page_icon3 from "../assets/img/icons/contact-page-icon3.png"

import CommonHero from "../Components/CommonHero.jsx"

function Contact() {

    return (
        <>

            <CommonHero mainTitle={"Contact Us"} subTitle={"Contact Us"} />

            <div className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-boxs">
                                <div className="heading1">
                                    <h2 className="title tg-element-title" data-aos="zoom-in-left" data-aos-duration="700">Contact Information</h2>
                                    <div className="space16"></div>
                                    <p>We’ve grown up with the internet revolution, and we <br /> know how to deliver on its</p>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src={contact_page_icon1} alt="" />
                                    </div>
                                    <div className="heading">
                                        <h5>Contact Us</h5>
                                        <a href="tel:+919512327005" className="text">+91 951 232 7005 </a>
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <img src={contact_page_icon2} alt="" />
                                    </div>
                                    <div className="heading">
                                        <h5>Send Us a Mail</h5>
                                        <a href="mailto:support@reformsol.com " className="text">support@reformsol.com </a>
                                    </div>
                                </div>

                                <div className="contact-box">
                                    <div className="icon">
                                        <img src={contact_page_icon3} alt="" />
                                    </div>
                                    <div className="heading">
                                        <h5>Office Location</h5>
                                        <a href="https://maps.app.goo.gl/yB2gowoXrWWL3RBS8" target="_blank" className="text">Near, Zydus Hospital Rd, No.5,
                                            <br />Thaltej, Ahmedabad, Gujarat 380059</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-form-details">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="single-input">
                                                <input type="number" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="single-input">
                                                <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button className="theme-btn1">Submit <span><i className="fa-solid fa-arrow-right"></i></span></button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space100"></div>

            <div className="contact-map-page">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29368.517043601056!2d72.51635!3d23.058092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d005f00c677%3A0x59602ce37217037e!2sNarayan%20Darshan%20Bungalows!5e0!3m2!1sen!2sin!4v1742494689391!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            </div>

            <div className="space100"></div>

        </>
    );
}

export default Contact;
