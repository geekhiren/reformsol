import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBlogExelDataAction } from "../ReduxStore/actions/ExelDataActions";

import { Link, json } from "react-router-dom";
function Blogs({ BlogDetailsList, getBlogExelDataAction }) {
    const [filteredBlogList, setFilteredBlogList] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        getBlogExelDataAction()
    }, [])
    useEffect(() => {
        if (BlogDetailsList?.data?.blogs) {
            setFilteredBlogList(BlogDetailsList.data.blogs)
        }
    }, [BlogDetailsList])

    const onFilteredBlog = (tag) => {
        // let temp = selectedTags
        // if (temp.find(itm => itm == tag)) {
        //     let index = temp.findIndex(itm => itm == tag)
        //     temp.splice(index, 1)
        // } else {
        //     temp.push(tag)
        // }
        // setSelectedTags(temp)
        let blogs = BlogDetailsList.data.blogs.filter(blog => blog.title.toLocaleLowerCase().includes(tag.toLocaleLowerCase()));
        setFilteredBlogList(blogs)

    }

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
                        <div class="row">
                            <div class="col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="row justify-content-center">
                                    {filteredBlogList.length ? filteredBlogList.map(blog =>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
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
                                        :
                                        <h3 className="text-center ">Blog Not Found</h3>
                                        // <div className="loader-contaner">
                                        //     <div className="loader"></div>
                                        // </div>
                                    }
                                </div>
                                {/* <div class="pagination mt-30">
                                        <ul>
                                            <li class="active"><a href="#">1</a></li>
                                            <li><a href="#">2</a></li>
                                            <li><a href="#">3</a></li>
                                            <li><a href="#"><i class="fas fa-arrow-right"></i></a></li>
                                        </ul>
                                    </div> */}
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div class="sidebar-area pt-30 pl-20">
                                    <div class="sidebar-card search-box">
                                        <form>
                                            <div class="input-group">
                                                <input type="text" class="form-control" placeholder="Search Here.." required="" onChange={event => { onFilteredBlog(event.target.value) }} />
                                                {/* <button class="btn" type="submit"><i class="fas fa-search"></i></button> */}
                                            </div>
                                        </form>
                                    </div>
                                    {/* <div class="sidebar-card categories mt-30">
                                        <h3>Categories</h3>
                                        <ul>
                                            <li><a class="active" href="service-details.html"><i class="fas fa-angle-right"></i> Business</a>
                                            </li>
                                            <li><a href="case-details.html"><i class="fas fa-angle-right"></i> Research</a></li>
                                            <li><a href="case-details.html"><i class="fas fa-angle-right"></i> Development</a></li>
                                            <li><a href="case-details.html"><i class="fas fa-angle-right"></i> Branding</a></li>
                                            <li><a href="case-details.html"><i class="fas fa-angle-right"></i> Marketing</a></li>
                                            <li><a href="case-details.html"><i class="fas fa-angle-right"></i> Support</a></li>
                                        </ul>
                                    </div> */}

                                    <div class="sidebar-card sd-tag">
                                        <h3>Tags</h3>
                                        <ul>
                                            {BlogDetailsList?.data && BlogDetailsList.data.tags.map(tag =>
                                                <li><a onClick={() => onFilteredBlog(tag)}>{tag}</a></li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
