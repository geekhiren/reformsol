import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getServiceExelDataAction } from "../ReduxStore/actions/ExelDataActions";
import { connect } from "react-redux";

function Services({ ServiceDetails, getServiceExelDataAction }) {

    useEffect(() => {
        getServiceExelDataAction()
    }, [])

    console.log('ServiceDetails', ServiceDetails)

    return (
        <>
            <div className="uni-banner">
                <div className="container">
                    <div className="uni-banner-text-area">
                        <h1>Our Services</h1>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="service ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-2 default-section-title-middle">
                        <h6>Services</h6>
                        <h3>We Are The Best Software Company In This Area</h3>
                    </div>
                    <div className="section-content">
                        <div className="row">
                            {ServiceDetails?.data ?
                                ServiceDetails?.data.map(service => {
                                    return <div className="col-lg-4 col-md-6 col-sm-12 col-12" >
                                        <Link to={'/service/' + service.slug}>
                                            <div className="service-card-2">
                                                <span></span>
                                                <div className="service-card-content">
                                                    <div className="service-card-2-img">
                                                        <img src="assets/images/icons/011-content-1.png" alt="image" />
                                                    </div>
                                                    <h4>{service.title}</h4>
                                                    <p>{service.description}</p>
                                                    {/* <a className="default-button-3 default-button-3-h" href="#">Read More <i
                                            className="fas fa-long-arrow-alt-right"></i></a> */}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                })
                                :<div className="loader-contaner">
                                    <div className="loader"></div>
                                </div>
                            }
                        </div>
                        {/* <div className="pagination mt-30">
                            <ul>
                                <li className="active">1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>i className="fas fa-arrow-right"></i></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div >
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        ServiceDetails: state.ServiceExelDataReducer,
    };
};

export default connect(
    mapStateToProps,
    {
        getServiceExelDataAction
    }
)(Services);
