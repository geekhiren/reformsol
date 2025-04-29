import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import blog2_img1 from "../assets/img/blog/blog2-img1.png"
import CommonHero from "../Components/CommonHero.jsx"

import { Link } from "react-router-dom";

function Project({ fileDetails, }) {

    return (
        <>
            <CommonHero mainTitle={"Our Projects"} subTitle={"Projects"} />

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
                <div className="project-boxs-area sp">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-8">
                                <div className="row">
                                    {fileDetails?.data?.projects.length > 0 && fileDetails.data?.projects?.map(project =>
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
                                {/* <div className="sidebar-box-area mb-40">
                                <h3>Search by Keyword</h3>
                                <div className="search">
                                    <input type="text" placeholder="Type keyword here" />
                                    <div className="button">
                                        <button><i className="fa-regular fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div> */}

                                <div className="sidebar-box-area sidebar-bg mb-40">
                                    <h3>Our Services</h3>
                                    <ul className="features-list">
                                        {fileDetails?.data?.services?.length > 0 && fileDetails.data.services.map(service =>
                                            <li key={service?.slugF}>
                                                <Link to={`/service/${service?.slug?.toLocaleLowerCase()}`}>{service.title} <span>
                                                    <i className="fa-regular fa-angle-right"></i>
                                                </span>
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>

                                <div className="sidebar-box-area sidebar-bg mb-40">
                                    <h3>Download Brochure</h3>
                                    <p>With a focus on excellence  &  commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                                    <div className="download-btns">
                                        <a className="daownload1" href="#">PDF Download <img src="assets/img/icons/download-img.png" alt="" /></a>
                                        <a className="daownload2" href="#">DOC Download <img src="assets/img/icons/download-img.png" alt="" /></a>
                                    </div>
                                </div>\
                            </div>
                            <div className="space60"></div>
                        </div>
                    </div>
                </div>
            }

        </>
    );
}

const mapStateToProps = (state) => {
    return {
        fileDetails: state.ExelDataReducer,
    };
};

export default connect(mapStateToProps, {})(Project);
