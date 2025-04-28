import SunEditor from 'suneditor-react'
import plugins from 'suneditor/src/plugins'
import { en } from 'suneditor/src/lang'
import CodeMirror from 'codemirror'
import katex from 'katex'
import 'suneditor/dist/css/suneditor.min.css'
import 'katex/dist/katex.min.css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/lib/codemirror.css'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'

import CommonHero from "../../Components/CommonHero.jsx"
import { getDataAction, updateDataAction } from "../../ReduxStore/actions/ExelDataActions";


const ContentEditor = ({ dataList, DataUpdateReducer, getDataAction, updateDataAction }) => {

    const [searchParams] = useSearchParams();
    const item = searchParams.get('item');
    const slug = searchParams.get('slug');


    useEffect(() => {
        getDataAction()
    }, [])


    const [itemDetails, setItemDetails] = useState({});

    useEffect(() => {
        if (dataList?.blogs && slug) {
            setItemDetails(dataList.blogs.find(blog => blog.slug.toLowerCase() === slug.toLowerCase()))
        }
    }, [dataList])


    useEffect(() => {
        if (DataUpdateReducer?.data) {
            window.location = '/admin/data-list-componnt';
        }
    }, [DataUpdateReducer])


    const options = {
        plugins: plugins,
        height: 250,
        codeMirror: {
            src: CodeMirror,
            options: {
                indentWithTabs: true,
                tabSize: 2
            }
        },
        katex: katex,
        lang: en,
        buttonList: [
            [
                'font',
                'fontSize',
                'formatBlock',
                'bold',
                'underline',
                'italic',
                'paragraphStyle',
                'blockquote',
                'strike',
                'subscript',
                'superscript',
                'fontColor',
                'hiliteColor',
                'textStyle',
                'removeFormat',
                'undo',
                'redo',
                'outdent',
                'indent',
                'align',
                'horizontalRule',
                'list',
                'lineHeight',
                'table',
                'link',
                'image',
                // 'video',
                // 'audio',
                // You must add the 'katex' library at options to use the 'math' plugin.
                // 'math',
                // You must add the "imageGalleryUrl".
                // 'imageGallery',
                'fullScreen',
                'showBlocks',
                'codeView',
                'preview'
                // 'print'
                // 'save',
                // 'template'
            ]
        ]
    }
    const onChange = (event) => {
        setItemDetails({ ...itemDetails, body: event })
    }

    const onTitleChange = (event) => {
        setItemDetails({ ...itemDetails, title: event.target.value })
    }

    const onSubmitClick = (event) => {
        var blogIndex = dataList.blogs.findIndex(blog => blog.slug == itemDetails.slug)

        var newData = dataList
        var slug = itemDetails.title.toLocaleLowerCase().replaceAll(' ', '-')
        newData.blogs[blogIndex] = { ...itemDetails, slug };

        updateDataAction(newData)
    }


    return (
        <>

            <CommonHero mainTitle={"About Us"} subTitle={"About"} />
            {itemDetails?.title ?
                <div className="container">
                    <div className="contact-form-details">

                        <div className="row">
                            <div className="col-lg-12">
                                <div className="col-lg-12">
                                    <button className="theme-btn1" onClick={onSubmitClick}>Submit <span><i className="fa-solid fa-arrow-right"></i></span></button>
                                </div>
                                <div className="single-input">
                                    <input type="text" placeholder="Title" value={itemDetails.title} onChange={onTitleChange} />
                                </div>
                            </div>
                            <div className="col-lg-12">

                                <SunEditor
                                    // {...props}
                                    placeholder="Please type here..."
                                    // name={name}
                                    lang="en"
                                    setContents={itemDetails.body}
                                    setDefaultStyle="font-family: Arial; font-size: 14px;"
                                    setOptions={options}
                                    // onImageUpload={onImageUpload}
                                    // onImageUploadBefore={handleImageUploadBefore}
                                    // onImageUpload={handleImageUpload}
                                    // onImageUploadError={handleImageUploadError}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                : <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-12 m-auto">
                            <div className="main-heading text-white">
                                <h1>Loading...</h1>
                            </div></div></div></div>
            }
            {
                DataUpdateReducer?.isLoading &&
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-12 m-auto">
                            <div className="main-heading text-white">
                                <h1>Loading...</h1>
                            </div>
                        </div>
                    </div>
                </div >
            }

            <div className="space100"></div>


        </>
    )
}

const mapStateToProps = (state) => {
    return {
        dataList: state.ExelDataReducer?.data || [],
        DataUpdateReducer: state.DataUpdateReducer,
    };
};
export default connect(mapStateToProps, { getDataAction, updateDataAction })(ContentEditor)