import { Link } from "react-router-dom";
import CommonHero from "../../Components/CommonHero.jsx"
import { getDataAction, updateDataAction } from "../../ReduxStore/actions/ExelDataActions";

import { connect } from 'react-redux'
import { useEffect } from "react";

const DataListComponnt = ({ dataList, getDataAction, updateDataAction, DataUpdateReducer }) => {

    useEffect(() => {
        getDataAction()
    }, [])



    useEffect(() => {
        if (DataUpdateReducer?.data) {
            window.location = '/admin/data-list-componnt';
        }
    }, [DataUpdateReducer])


    const removeBlog = (blogIndex) => {
        var newData = dataList
        newData.data.blogs.splice(blogIndex, 1)
        updateDataAction({ ...newData.data })
    }

    return (
        <>
            <CommonHero mainTitle={"About Us"} subTitle={"About"} />

            <div className="container">
                <div className="sidebar-box-area sidebar-bg mb-40">
                    <div className="d-flex justify-content-between py-3">
                        <h3>Recent Blogs</h3>
                        <Link to={'/admin/create-content-editor'} className="theme-btn1">New Blog <span><i className="fa-solid fa-arrow-right"></i></span></Link>
                    </div>
                    <div className="sidebar-blog-boxs">
                        {(dataList?.isLoading || DataUpdateReducer?.isLoading)

                            ? <div className="container">
                                <div className="row align-items-center text-center">
                                    <div className="col-lg-12 m-auto">
                                        <div className="main-heading text-white">
                                            <h1>Loading...</h1>
                                        </div>
                                    </div>
                                </div>
                            </div >
                            :
                            dataList?.data?.blogs?.length > 0 && dataList.data.blogs?.map((blog, index) =>
                                <div className="blog2-box border-bottom mb-2 row " >
                                    <div className="col-lg-2 image">
                                        <img src={blog.img} alt="" />
                                    </div>
                                    <div className="col-lg-10 heading2">
                                        <h4><Link to={'/admin/content-editor?item=blog&slug=' + blog.slug.toLowerCase()}>{blog.title}</Link></h4>
                                        <div className="">
                                            <button className="theme-btn2 p-2 mt-2 " onClick={() => { removeBlog(index) }}> Remove</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </>
    );
}


const mapStateToProps = (state) => {
    return {
        dataList: state.ExelDataReducer,
        DataUpdateReducer: state.DataUpdateReducer,
    };
};
export default connect(mapStateToProps, { getDataAction, updateDataAction })(DataListComponnt);
