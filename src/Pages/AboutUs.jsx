import React from "react";
import { Link } from "react-router-dom";
import span2 from "../assets/img/icons/span2.png"
import mainIconSmall from "../assets/img/logo/main_icon_small.png"
import about2_img1 from "../assets/img/about/about2-img1.png"
import about2_img2 from "../assets/img/about/about2-img2.png"
import about2_img3 from "../assets/img/about/about2-img3.png"
import visiton_img1 from "../assets/img/about/visiton-img1.png"
import visiton_img2 from "../assets/img/about/visiton-img2.png"
import visiton_img3 from "../assets/img/about/visiton-img3.png"
import solution_iocn1 from "../assets/img/icons/solution-iocn1.png"
import solution_iocn2 from "../assets/img/icons/solution-iocn2.png"
import about_tab_img from "../assets/img/about/about-tab-img.png"
import team2_img1 from "../assets/img/team/team2-img1.png"
import team2_img2 from "../assets/img/team/team2-img2.png"
import team2_img3 from "../assets/img/team/team2-img3.png"
import team2_img4 from "../assets/img/team/team2-img4.png"
import Testimonial from "../Components/Testimonial.jsx"

import CommonHero from "../Components/CommonHero.jsx"

function AboutUs() {
    return (
        <>
            <CommonHero mainTitle={"About Us"} subTitle={"About"} />

            {/* =====SOLUTION AREA START======= */}

            <div className="solution pt50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading2" >
                                <span className="span" data-aos="zoom-in-right" data-aos-duration="700">
                                    <img src={mainIconSmall} alt="" /> Our Mission</span>
                                <h2 className="title tg-element-title" data-aos="zoom-in-right" data-aos-duration="700">Driving Progress Through People-Centered Technology</h2>
                                <div className="space16"></div>
                                <p data-aos="fade-up-right" data-aos-duration="700">At ReformSol, our mission is simple:
                                    To empower businesses and communities through intelligent, reliable, and human-driven technology solutions.</p>
                                <div className="space16"></div>
                                <p data-aos="fade-up-right" data-aos-duration="700">We believe that technology should serve people—not the other way around. That’s why everything we build, design, and deliver is rooted in understanding your unique challenges, goals, and values. From AI innovations to IT infrastructure, we aim to create solutions that are not just technically sound, but truly impactful.</p>
                                <div className="space16"></div>
                                <p data-aos="fade-up-right" data-aos-duration="700">We’re not here to throw jargon or buzzwords.
                                    We’re here to listen, collaborate, and solve real problems with smart, scalable tools that grow with you.</p>
                                <div className="space30"></div>
                                <div className="" data-aos="fade-up-right" data-aos-duration="700">
                                    <Link className="theme-btn2" to="/service">Discover More <span><i
                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="solution-images">
                                <div className="image1" data-aos="zoom-in-right" data-aos-duration="700">
                                    <img src={about2_img1} alt="" />
                                </div>
                                <div className="image2 reveal image-anime" data-aos="flip-right" data-aos-duration="800">
                                    <img src={about2_img2} alt="" />
                                </div>
                                <div className="image3" data-aos="zoom-in-left" data-aos-duration="800">
                                    <img src={about2_img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =====SOLUTION AREA END======= */}

            <div className="solution about-solution pt100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="images">
                                <div className="row">
                                    <div className="col-lg-12" data-aos="flip-left" data-aos-duration="700">
                                        <div className="image image-anime">
                                            <img src={visiton_img1} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6" data-aos="zoom-in-right" data-aos-duration="800">
                                        <div className="space30"></div>
                                        <div className="image image-anime">
                                            <img src={visiton_img2} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6" data-aos="zoom-in-left" data-aos-duration="700">
                                        <div className="space30"></div>
                                        <div className="image image-anime">
                                            <img src={visiton_img3} alt="" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                    <img src={mainIconSmall} alt="" /> Our Vision</span>
                                <h2 className="title tg-element-title" data-aos="zoom-in-left" data-aos-duration="700">Empowering the Future Through Innovation, Intelligence & Integrity</h2>
                                <div className="space16"></div>
                                <p data-aos="fade-up-left" data-aos-duration="700">At ReformSol, our vision is to shape a future where technology is not just a tool—but a powerful catalyst for growth, resilience, and transformation. We aim to be a global leader in delivering intelligent IT and AI solutions that empower businesses of every size to thrive in a rapidly evolving digital world.</p>

                                <div className="item-box" data-aos="fade-up-left" data-aos-duration="900">
                                    <div className="icon">
                                        <div className="">
                                            <img src={solution_iocn1} alt="" />
                                        </div>
                                    </div>
                                    <div className="" >
                                        <h3><a href="#">Cloud Solutions</a></h3>
                                        <div className="space10"></div>
                                        <p>We provide secure, scalable cloud infrastructure<br /> for migration, optimization, or new deployments.</p>
                                    </div>
                                </div>

                                <div className="item-box" data-aos="fade-up-left" data-aos-duration="900">
                                    <div className="icon">
                                        <div className="">
                                            <img src={solution_iocn2} alt="" />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3><a href="#">Managed IT Services</a></h3>
                                        <div className="space10"></div>
                                        <p>Focus on your core business activities while we take <br /> care of your IT needs with our managed IT
                                            services.</p>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="" data-aos="fade-up-left" data-aos-duration="900">
                                    <Link className="theme-btn2" to="/service">Discover More <span><i
                                        className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className="about-tabs pt100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 text-center m-auto">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                    <img src={mainIconSmall} alt="" /> Our Story</span>
                                <h2 className="title tg-element-title" data-aos="zoom-in-left" data-aos-duration="700">Our Company Story</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-duration="900">
                        <div className="col-lg-10 m-auto text-center">
                            <ul className="nav nav-pills tab-header-all mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="about-tab1-tab" data-bs-toggle="pill" data-bs-target="#about-tab1"
                                        type="button" role="tab" aria-controls="about-tab1" aria-selected="true">2017</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab2-tab" data-bs-toggle="pill" data-bs-target="#about-tab2"
                                        type="button" role="tab" aria-controls="about-tab2" aria-selected="false">2018</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab3-tab" data-bs-toggle="pill" data-bs-target="#about-tab3"
                                        type="button" role="tab" aria-controls="about-tab3" aria-selected="false">2019</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab4-tab" data-bs-toggle="pill" data-bs-target="#about-tab4"
                                        type="button" role="tab" aria-controls="about-tab4" aria-selected="false">2020</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab5-tab" data-bs-toggle="pill" data-bs-target="#about-tab5"
                                        type="button" role="tab" aria-controls="about-tab5" aria-selected="false">2021</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab6-tab" data-bs-toggle="pill" data-bs-target="#about-tab6"
                                        type="button" role="tab" aria-controls="about-tab6" aria-selected="false">2022</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="about-tab7-tab" data-bs-toggle="pill" data-bs-target="#about-tab7"
                                        type="button" role="tab" aria-controls="about-tab7" aria-selected="false">2023</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="space60"></div>
                    <div className="row">
                        <div className="col-lg-12" >
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="about-tab1" role="tabpanel" aria-labelledby="about-tab1-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6" data-aos="fade-up-left" data-aos-duration="900">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2017 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image " data-aos="fade-up-right" data-aos-duration="900">
                                                <div className=" image-anime">
                                                    <img src={about_tab_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab2" role="tabpanel" aria-labelledby="about-tab2-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6" data-aos="fade-up-left" data-aos-duration="900">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2018 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image " data-aos="fade-up-right" data-aos-duration="900">
                                                <div className=" image-anime">
                                                    <img src={about_tab_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab3" role="tabpanel" aria-labelledby="about-tab3-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6" data-aos="fade-up-left" data-aos-duration="900">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2019 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image " data-aos="fade-up-right" data-aos-duration="900">
                                                <div className=" image-anime">
                                                    <img src={about_tab_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab4" role="tabpanel" aria-labelledby="about-tab4-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6" data-aos="fade-up-left" data-aos-duration="900">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2020 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image " data-aos="fade-up-right" data-aos-duration="900">
                                                <div className=" image-anime">
                                                    <img src={about_tab_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab5" role="tabpanel" aria-labelledby="about-tab5-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6" data-aos="fade-up-left" data-aos-duration="900">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2021 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image " data-aos="fade-up-right" data-aos-duration="900">
                                                <div className=" image-anime">
                                                    <img src={about_tab_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab6" role="tabpanel" aria-labelledby="about-tab6-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6" data-aos="fade-up-left" data-aos-duration="900">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2022 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image " data-aos="fade-up-right" data-aos-duration="900">
                                                <div className=" image-anime">
                                                    <img src={about_tab_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="about-tab7" role="tabpanel" aria-labelledby="about-tab7-tab">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6" data-aos="fade-up-left" data-aos-duration="900">
                                            <div className="tab-content-box">
                                                <div className="heading2">
                                                    <h5>2023 - A Legacy of Innovation</h5>
                                                    <div className="space24"></div>
                                                    <p><span className="text">Early Years:</span> In the early years, Steve Jobs recognized the growing
                                                        importance of technology in business and set out to create a company that could help
                                                        organizations leverage the power of digital innovation. With a small team of passionate
                                                        individuals.</p>
                                                    <div className="space16"></div>
                                                    <p><span className="text">Expansion & Innovation:</span> As technology continued to evolve, so did
                                                        [Company Name]. We expanded our service offerings to include a wide range of solutions, from
                                                        cybersecurity and cloud computing to data analytics and artificial intelligence.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="image " data-aos="fade-up-right" data-aos-duration="900">
                                                <div className=" image-anime">
                                                    <img src={about_tab_img} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Testimonial />

            {/* <div className="team2 sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                    <img src={mainIconSmall} alt="" /> Our Team</span>
                                <h2 className="title tg-element-title" data-aos="zoom-in-left" data-aos-duration="700">Meet With Our Expert Team</h2>
                            </div>
                        </div>
                    </div>

                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-box">
                                <div className="image-area">
                                    <div className="image">
                                        <img src={team2_img1} alt="" />
                                    </div>
                                    <div className="icon-area">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="heading2">
                                    <h4><a href="#">John Doe</a></h4>
                                    <div className="space10"></div>
                                    <p>CEO & Founder</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-box">
                                <div className="image-area">
                                    <div className="image">
                                        <img src={team2_img2} alt="" />
                                    </div>
                                    <div className="icon-area">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="heading2">
                                    <h4><a href="#">Jane Smith</a></h4>
                                    <div className="space10"></div>
                                    <p>Chef Technology Officer</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-box">
                                <div className="image-area">
                                    <div className="image">
                                        <img src={team2_img3} alt="" />
                                    </div>
                                    <div className="icon-area">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="heading2">
                                    <h4><a href="#">Sarah Thompson </a></h4>
                                    <div className="space10"></div>
                                    <p>Head of Project Management</p>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="team-box">
                                <div className="image-area">
                                    <div className="image">
                                        <img src={team2_img4} alt="" />
                                    </div>
                                    <div className="icon-area">
                                        <ul>
                                            <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
                                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space30"></div>
                                <div className="heading2">
                                    <h4><a href="#">David Garcia</a></h4>
                                    <div className="space10"></div>
                                    <p>Lead Software Engineer</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div> */}

        </>
    );
}

export default AboutUs;
