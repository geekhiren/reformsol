import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import blog2_img1 from "../assets/img/blog/blog2-img1.png"
import CommonHero from "../Components/CommonHero.jsx"

import { Link } from "react-router-dom";

function Blogs({ projectsList, servicesList, tagList }) {

    return (
        <>
            <CommonHero mainTitle={"Our Projects"} subTitle={"Projects"} />

            <div className="project-boxs-area sp">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8">
                            <div className="row">
                                {projectsList?.map(project =>
                                    <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-duration="900">
                                        <div className="project-page-box">
                                            <div className="image">
                                                <img src={project.img} alt="" />
                                            </div>
                                            <div className="heading2">
                                                <h4><Link to={'/project/' + project.slug.toLowerCase()}>{project.title}</Link></h4>
                                                <Link to={'/project/' + project.slug.toLowerCase()} className="learn">Learn More <span><i
                                                    className="fa-solid fa-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            {/* <div class="sidebar-box-area mb-40">
                                <h3>Search by Keyword</h3>
                                <div class="search">
                                    <input type="text" placeholder="Type keyword here" />
                                    <div class="button">
                                        <button><i class="fa-regular fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div> */}

                            <div class="sidebar-box-area sidebar-bg mb-40">
                                <h3>Our Services</h3>
                                <ul class="features-list">
                                    {servicesList?.length > 0 && servicesList?.map(service =>
                                        <li>
                                            <a href="#">{service.title} <span>
                                                <i class="fa-regular fa-angle-right"></i>
                                            </span>
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>

                            <div class="sidebar-box-area sidebar-bg mb-40">
                                <h3>Download Brochure</h3>
                                <p>With a focus on excellence  &  commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                                <div class="download-btns">
                                    <a class="daownload1" href="#">PDF Download <img src="assets/img/icons/download-img.png" alt="" /></a>
                                    <a class="daownload2" href="#">DOC Download <img src="assets/img/icons/download-img.png" alt="" /></a>
                                </div>
                            </div>\
                        </div>
                        <div className="space60"></div>
                    </div>
                </div>
            </div>

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        projectsList: state.ExelDataReducer?.data?.projects || [],
        servicesList: state.ExelDataReducer?.data?.services || [],
    };
};

export default connect(mapStateToProps, {})(Blogs);
