import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { connect } from "react-redux";
import CommonHero from "../Components/CommonHero.jsx"
import dateIcon from "../assets/img/icons/date.png"

function BlogDetails({ fileDetails, }) {

    let blogSlug = useParams();

    const [blogDetais, setBlogDetais] = useState();

    useEffect(() => {
        if (fileDetails?.data?.blogs?.length > 0) {
            setBlogDetais(fileDetails?.data?.blogs.find(blog => blog.slug.toLowerCase() == blogSlug.blogSlug.toLowerCase()))
        }
    }, [fileDetails])

    return (

        <>{blogDetais ?

            <>
                <CommonHero mainTitle={blogDetais.title} subTitle={""} showBreadCrumb={false} />

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
                    <div className="blog-details ptb-100">
                        <div className="container">
                            <div className="row">
                                {/* {blogDetais.details.map(item =>
                             
                            )} */}
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12 text-white">
                                    <div dangerouslySetInnerHTML={{ __html: blogDetais.body }} />
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-white">

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
                                        <h3>Recent Blogs</h3>
                                        <div className="sidebar-blog-boxs">
                                            {fileDetails?.data?.blogs.length > 0 && fileDetails.data.blogs.slice(0, 5)?.map(blog =>
                                                <div className="blog2-box" >
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
                                                        <Link to={'/blog/' + blog.slug.toLowerCase()} className="learn text-white ">Read More <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="sidebar-box-area sidebar-bg mb-40">
                                        <h3>Our Services</h3>
                                        <ul className="features-list">
                                            {fileDetails?.data?.services?.length > 0 && fileDetails.data.services?.map(service =>
                                                <li>
                                                    <a href="#">{service.title} <span>
                                                        <i className="fa-regular fa-angle-right"></i>
                                                    </span>
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </div>

                                    {/* <div className="sidebar-box-area sidebar-bg mb-40">
                                    <h3>Tags</h3>
                                    <ul className="tags">
                                        {tagList.length > 0 && tagList?.map(tag =>
                                            <li><a href="#">{tag}</a></li>
                                        )}

                                    </ul>
                                </div> */}
                                    <div className="sidebar-box-area sidebar-bg mb-40">
                                        <h3>Download Brochure</h3>
                                        <p>With a focus on excellence  &  commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                                        <div className="download-btns">
                                            <a className="daownload1" href="#">PDF Download <img src="assets/img/icons/download-img.png" alt="" /></a>
                                            <a className="daownload2" href="#">DOC Download <img src="assets/img/icons/download-img.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                }
            </>
            : <div className="loader-contaner">
                <div className="loader"></div>
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
export default connect(mapStateToProps, {})(BlogDetails);