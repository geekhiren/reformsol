import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { connect } from "react-redux";
import CommonHero from "../Components/CommonHero.jsx"
import dateIcon from "../assets/img/icons/date.png"

function BlogDetails({ fileDetails, }) {

    let projectSlug = useParams();

    const [projectDetais, setProjectDetais] = useState();

    useEffect(() => {
        if (fileDetails?.data?.projects?.length > 0) {
            setProjectDetais(fileDetails.data.projects.find(project => project.slug.toLowerCase() == projectSlug.projectSlug.toLowerCase()))
        }
    }, [fileDetails])

    return (
        <>
            <CommonHero mainTitle={projectDetais?.title} subTitle={""} showBreadCrumb={false} />
            {fileDetails?.isLoading || !projectDetais ?
                <div className="container">
                    < div className="row align-items-center text-center" >
                        <div className="col-lg-12 m-auto">
                            <div className="main-heading text-white">
                                <h1>Loading...</h1>
                            </div>
                        </div>
                    </div >
                </div > :
                <>

                    <div className="blog-details ptb-100">
                        <div className="container">
                            <div className="row">
                                {/* {blogDetais.details.map(item =>
                             
                            )} */}
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12 text-white">
                                    <div dangerouslySetInnerHTML={{ __html: projectDetais.page }} />
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
                </>
            }
        </>

    )
}


const mapStateToProps = (state) => {
    return {
        fileDetails: state.ExelDataReducer,
    };
};
export default connect(mapStateToProps, {})(BlogDetails);