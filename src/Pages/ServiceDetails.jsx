import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getServiceExelDataAction } from "../ReduxStore/actions/ExelDataActions";


function BlogDetails({ ServiceDetailsList, getServiceExelDataAction }) {
    let serviceSlug = useParams();

    const [serviceDetails, setServiceDetails] = useState();
    useEffect(() => {
        getServiceExelDataAction()
    }, [])

    useEffect(() => {
        if (ServiceDetailsList) {
            setServiceDetails(ServiceDetailsList?.filter(blog => blog.slug == serviceSlug.serviceSlug)[0]);
        }
    }, [ServiceDetailsList])

    return (
        <>
            <div className="uni-banner">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h3 className="text-white ">{serviceDetails?.title}</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Blog Details</li>
                        </ul>
                    </div>
                </div>
            </div>

            {serviceDetails ?
            <div className="blog-details ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                            <div dangerouslySetInnerHTML={{ __html: serviceDetails?.body.replaceAll('"','').replaceAll('`','') }} />
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="sidebar-area pt-30">
                                <div className="sidebar-card search-box">
                                    <form>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Here.." required />
                                            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                                <div className="sidebar-card categories mt-30">
                                    <h3>Categories</h3>
                                    <ul>
                                        <li><a className="active" href="#"><i className="fas fa-angle-right"></i>
                                            Business</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Research</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Development</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Branding</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Marketing</a></li>
                                        <li><a href="#"><i className="fas fa-angle-right"></i> Support</a></li>
                                    </ul>
                                </div>
                                <div className="sidebar-card recent-news">
                                    <h3>Recent News</h3>
                                    <div className="recent-news-card">
                                        <img src="assets/images/inner-pages/bds1.jpg" alt="image" />
                                        <h5><a href="#">Some Important Rules To A New Business</a></h5>
                                        <p>5th Jun 2021</p>
                                    </div>
                                    <div className="recent-news-card">
                                        <img src="assets/images/inner-pages/bds2.jpg" alt="image" />
                                        <h5><a href="#">Why Would You Need Some New Business</a></h5>
                                        <p>4th Jun 2021</p>
                                    </div>
                                    <div className="recent-news-card">
                                        <img src="assets/images/inner-pages/bds3.jpg" alt="image" />
                                        <h5><a href="#">Know Top Ten Rules For Corporate Business</a></h5>
                                        <p>2nd Jun 2021</p>
                                    </div>
                                </div>
                                <div className="sidebar-card sd-tag">
                                    <h3>Tags</h3>
                                    <ul>
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Strategy</a></li>
                                        <li><a href="#">Research</a></li>
                                        <li><a href="#">Branding</a></li>
                                        <li><a href="#">Planning</a></li>
                                        <li><a href="#">Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        ServiceDetailsList: state.ServiceExelDataReducer?.data,
    };
};

export default connect(
    mapStateToProps,
    {
        getServiceExelDataAction
    }
)(BlogDetails);

