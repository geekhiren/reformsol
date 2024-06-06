import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBlogExelDataAction } from "../ReduxStore/actions/ExelDataActions";

import { Link } from "react-router-dom";
function Blogs({ BlogDetailsList, getBlogExelDataAction }) {
    const blogList = [];

    useEffect(() => {
        getBlogExelDataAction()
    }, [])

    return (
        <>
            <div className="uni-banner">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h1>Our Latest News</h1>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Blogs</li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="blog ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-middle">
                        <h6>OUR BLOG</h6>
                        <h3>Our Popular Blog Post</h3>
                    </div>
                    <div className="section-content">
                        <div className="row justify-content-center">
                            {BlogDetailsList?.data ? BlogDetailsList.data.map(blog =>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <Link to={`/blog/${blog.slug}`}><img src={blog.img} alt="image" /></Link>
                                        </div>
                                        <div className="blog-text-area">
                                            <span>TECHNOLOGY</span>
                                            <div className="blog-date">
                                                <ul>
                                                    <li><i className="fas fa-user"></i> By Admin</li>
                                                    {/* <li><i className="far fa-comments"></i> {JSON.parse(blog.comments).length}</li> */}
                                                    <li><i className="far fa-calendar-alt"></i>{blog.date}</li>
                                                </ul>
                                            </div>
                                            <h4><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            )
                                : <div className="loader-contaner">
                                    <div className="loader"></div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        BlogDetailsList: state.BlogExelDataReducer,
    };
};

export default connect(
    mapStateToProps,
    {
        getBlogExelDataAction
    }
)(Blogs);
