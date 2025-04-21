import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import blog2_img1 from "../assets/img/blog/blog2-img1.png"
import service2_icon1 from "../assets/img/icons/service2-icon1.png"
import dateIcon from "../assets/img/icons/date.png"

import CommonHero from "../Components/CommonHero.jsx"

function BlogDetails({ servicesList, blogsList }) {
    let serviceSlug = useParams();

    const [serviceDetails, setServiceDetails] = useState();

    useEffect(() => {
        if (servicesList?.length > 0) {
            setServiceDetails(servicesList?.find(service => service.slug.toLocaleLowerCase() === serviceSlug.serviceSlug.toLocaleLowerCase()));
        }
    }, [servicesList])

    return (
        <>
            <CommonHero mainTitle={serviceDetails?.title} subTitle={serviceDetails?.title + " service "} />

            {serviceDetails ?
                <>
                    <div className="service-details-area-all ">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-8 col-md-8 col-sm-12 col-12  details-right-space">
                                    <div className="service-details-post">
                                        <article>
                                            <div className="details-post-area">
                                                {/* <div className="image">
                                                    <img src={blog2_img1} alt="" />
                                                </div> */}
                                                {/* <div className="space30"></div> */}
                                                <div className="heading2">
                                                    <h2>{serviceDetails.title}</h2>
                                                    <div className="space16"></div>
                                                    <p>{serviceDetails.description}</p>
                                                </div>
                                            </div>
                                        </article>

                                        <article>
                                            <div className="details-post-area">
                                                <div className="row">

                                                    {serviceDetails?.subDetails?.length > 0 &&
                                                        serviceDetails?.subDetails.map(detais =>
                                                            <div className={detais.class}>
                                                                <div className="space30"></div>
                                                                <div className="heading2">
                                                                    <h5>{detais.title}</h5>
                                                                    <div className="space16"></div>
                                                                    <p>{detais.description}</p>
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>
                                            </div>
                                        </article>

                                        <div className="space50"></div>

                                        <div className="faq-area-all">
                                            <div className="heading2">
                                                <h5>Frequently Asked Question</h5>
                                            </div>
                                            <div className="space20"></div>

                                            <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                                                {serviceDetails?.faq?.length > 0 &&
                                                    serviceDetails?.faq.map((item, index) =>

                                                        <div className="accordion-item">
                                                            <h2 className="accordion-header" id={`flush-heading${index}`}>
                                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                                    {item.title}
                                                                </button>
                                                            </h2>
                                                            <div id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent="#accordionFlushExample">
                                                                <div className="accordion-body">{item.description}</div>
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12 details-right-space">
                                    {/* <div class="sidebar-box-area mb-40">
                                    <h3>Search by Keyword</h3>
                                    <div class="search">
                                        <input type="text" placeholder="Type keyword here" />
                                        <div class="button">
                                            <button><i class="fa-regular fa-magnifying-glass"></i></button>
                                        </div>
                                    </div>
                                </div> */}

                                    {/* <div class="sidebar-box-area sidebar-bg mb-40">
                                        <h3>Recent Blogs</h3>
                                        <div class="sidebar-blog-boxs">
                                            {blogsList.length > 0 && blogsList.slice(0, 5)?.map(blog =>
                                                <div class="sidebar-blogs">
                                                    <div class="">
                                                        <div class="image">
                                                            <img src={blog.img} alt="" />
                                                        </div>
                                                    </div>
                                                    <div class="heading">
                                                        <a href="#" class="date"><img src={dateIcon} alt="" /> 19/02/2024</a>
                                                        <h5><a href="blog-details.html">{blog.title}</a></h5>
                                                    </div>
                                                </div>
                                            )}
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

                                    {/* <div class="sidebar-box-area sidebar-bg mb-40">
                                    <h3>Tags</h3>
                                    <ul class="tags">
                                        {tagList.length > 0 && tagList?.map(tag =>
                                            <li><a href="#">{tag}</a></li>
                                        )}

                                    </ul>
                                </div> */}
                                    <div class="sidebar-box-area sidebar-bg mb-40">
                                        <h3>Download Brochure</h3>
                                        <p>With a focus on excellence  &  commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                                        <div class="download-btns">
                                            <a class="daownload1" href="#">PDF Download <img src="assets/img/icons/download-img.png" alt="" /></a>
                                            <a class="daownload2" href="#">DOC Download <img src="assets/img/icons/download-img.png" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="space50"></div>

                    <div className="servcie2 pb100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto text-center">
                                    <div className="heading2">
                                        <h2 >More Services</h2>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="space30"></div> */}
                            {/* <div className="row">
                                {servicesList?.length > 0 &&
                                    servicesList?.map((service, index) => {
                                        return (
                                            index < 2 ?
                                                <div className="col-lg-4 col-md-6" >
                                                    <div className="">
                                                        <div className="servcie2-box">
                                                            <div className="icon">

                                                                <img src={service2_icon1} alt="" />
                                                            </div>
                                                            <a href="#" className="arrow"><i className="fa-solid fa-arrow-right"></i></a>
                                                            <div className="heading2">
                                                                <h4><a href="#">{service.title}</a></h4>
                                                                <div className="space16"></div>
                                                                <p>{service.sorDescription}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                : null)
                                    })}
                            </div> */}

                            <div className="space40"></div>
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <Link className="theme-btn2" to="/services">View All Services <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="space100"></div>

                </>
                :
                <div className="loader-contaner">
                    <div className="loader"></div>
                </div>
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        blogsList: state.ExelDataReducer?.data?.blogs || [],
        tagList: state.ExelDataReducer?.data?.tags || [],
        servicesList: state.ExelDataReducer?.data?.services || [],
    };
};

export default connect(mapStateToProps, {})(BlogDetails);