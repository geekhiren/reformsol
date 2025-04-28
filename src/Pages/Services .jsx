import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import span2 from "../assets/img/icons/span2.png"
import mainIconSmall from "../assets/img/logo/main_icon_small.png"
import service2_icon1 from "../assets/img/icons/service2-icon1.png"
import about2_img1 from "../assets/img/about/about2-img1.png"
import about2_img2 from "../assets/img/about/about2-img2.png"
import about2_img3 from "../assets/img/about/about2-img3.png"

import CommonHero from "../Components/CommonHero.jsx"

function Services({ fileDetails }) {

    return (
        <>
            <CommonHero mainTitle={"Our Service"} subTitle={"Service"} />

            {fileDetails?.isLoading ?
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-12 m-auto">
                            <div className="main-heading text-white">
                                <h1>Loading...</h1>
                            </div>
                        </div>
                    </div>
                </div > :
                <>
                    <div className="servcie2">
                        <div className="container">
                            <div className="row" >
                                {fileDetails?.data?.services?.map(service =>
                                    <div className="col-lg-4 col-md-6" data-aos="flip-up" data-aos-duration="1000">
                                        <div className="">
                                            <div className="servcie2-box ">
                                                <div className="icon">
                                                    <img src={service.img} alt="" />
                                                </div>
                                                <Link to={`/service/${service?.slug?.toLocaleLowerCase()}`} className="arrow"><i className="fa-solid fa-arrow-right"></i></Link>
                                                <div className="heading2">
                                                    <h4><Link to={`/service/${service?.slug?.toLocaleLowerCase()}`}>{service.title}</Link></h4>
                                                    <div className="space16"></div>
                                                    <p>Strategic IT planning roadmap development Business process analysis and improvement for It solution &
                                                        technology.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="space100"></div>

                    <div className="about2">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about2-images">
                                        <div className="image1" data-aos="zoom-in-right" data-aos-duration="800">
                                            <img src={about2_img1} alt="" />
                                        </div>
                                        <div className="image2 reveal image-anime" data-aos="flip-left" data-aos-duration="800">
                                            <img src={about2_img2} alt="" />
                                        </div>
                                        <div className="image3" data-aos="zoom-in-left" data-aos-duration="900">
                                            <img src={about2_img3} alt="" />
                                        </div>
                                        <div className="counter-box" data-aos="flip-left" data-aos-duration="700">
                                            <h3>25</h3>
                                            <p>Years Of <br /> Experience</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="heading2">
                                        <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                            <img src={mainIconSmall} alt="" /> Our Service</span>
                                        <h2 className="title tg-element-title" data-aos="zoom-in-left" data-aos-duration="700">Empower Your Business With Our Comprehensive IT Solutions</h2>
                                        <div className="space16"></div>
                                        <p data-aos="fade-up-left" data-aos-duration="700">Welcome to Reformsol, your premier destination for cutting-edge technology solutions and IT services. At
                                            Reformsol, we are passionate about harnessing the power of technology to empower businesses a like.</p>

                                        <div className="space10"></div>

                                        <div className="porgress-line-all" data-aos="fade-up-left" data-aos-duration="900">
                                            <div className="progress-line">

                                                <h6>IT Consulting</h6>
                                                <div className="progress1" data-init="true">
                                                    <div className="percentCount">100%</div>
                                                    <div className="progressbar" >
                                                        <div className="proggress" >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress-line">
                                                <h6>Cyber Security</h6>
                                                <div className="progress2" data-init="true">
                                                    <div className="percentCount">90%</div>
                                                    <div className="progressbar" >
                                                        <div className="proggress" >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space30"></div>
                                        <div className="button" data-aos="fade-up-left" data-aos-duration="900">
                                            <Link className="theme-btn2" to="/about">Learn More <i className="fa-solid fa-arrow-right"></i></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space100"></div>

                </>
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        fileDetails: state.ExelDataReducer,
    };
};

export default connect(mapStateToProps, {})(Services);
