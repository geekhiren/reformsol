import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import blog2_img1 from "../assets/img/blog/blog2-img1.png"
import CommonHero from "../Components/CommonHero.jsx"

import { Link } from "react-router-dom";

function Blogs({ blogsList, tagList, servicesList }) {

    console.log(servicesList)
    return (
        <>
            <CommonHero mainTitle={"Our Blog"} subTitle={"Blog"} />

            <div className="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">

                                {blogsList?.map(blog =>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="900">
                                        <div className="blog2-box">
                                            <div className="image">
                                                <img src={blog.img} alt="" />
                                            </div>
                                            <div className="heading2">
                                                {/* <div className="tags">
                                            <a href="#" className="date"><img src={date} alt="" /> 10/02/2024</a>
                                            <a href="#" className="date outhor"><img src={user} alt="" /> Ben Cutting</a>
                                        </div> */}
                                                <h4><Link to={'/blog/' + blog.slug.toLowerCase()}>{blog.title}</Link></h4>
                                                <div className="space16"></div>
                                                {/* <p>We explore the growing trend of remote work and its implications for cybersecurity.</p> */}
                                                {/* <div className="space16"></div> */}
                                                <Link to={'/blog/' + blog.slug.toLowerCase()} className="learn">Read More <span><i className="fa-solid fa-arrow-right"></i></span></Link>
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
                                <h3>Tags</h3>
                                <ul class="tags">
                                    {tagList.length > 0 && tagList?.map(tag =>
                                        <li><a href="#">{tag}</a></li>
                                    )}
                                </ul>
                            </div>

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
                    </div>
                    <div className="space60"></div>
                    {/* <div className="row">
                        <div className="col-12 m-auto">
                            <div className="theme-pagination text-center">
                                <ul>
                                    <li><a href="#"><i className="fa-solid fa-angle-left"></i></a></li>
                                    <li><a className="active" href="#">01</a></li>
                                    <li><a href="#">02</a></li>
                                    <li>...</li>
                                    <li><a href="#">12</a></li>
                                    <li><a href="#"><i className="fa-solid fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <div className="space100"></div>
        </>
    );
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        blogsList: state.ExelDataReducer?.data?.blogs || [],
        tagList: state.ExelDataReducer?.data?.tags || [],
        servicesList: state.ExelDataReducer?.data?.services || [],
    };
};

export default connect(mapStateToProps, {})(Blogs);
