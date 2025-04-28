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
import { getDataAction, updateDataAction } from "../../ReduxStore/actions/ExelDataActions.js";


const CreateForm = ({ dataList, DataUpdateReducer, getDataAction, updateDataAction }) => {

    // useEffect(() => {
    //     getDataAction()
    // }, [])


    const [itemTitle, setItemTitle] = useState({});
    const [itemDetails, setItemDetails] = useState({});

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

    const onTitleChange = (event) => {
        setItemTitle(event.target.value)
    }

    const onChange = (event) => {
        setItemDetails({ ...itemDetails, body: event })
    }

    const onSubmitClick = (event) => {
        var newData = dataList
        var slug = itemTitle?.toLocaleLowerCase()?.replaceAll(' ', '-')
        newData.blogs.push({ ...itemDetails, title: itemTitle, slug });

        updateDataAction(newData)
    }


    console.log('itemDetails', itemDetails)
    return (
        <>

            <CommonHero mainTitle={"About Us"} subTitle={"About"} />

            {/* {
                DataUpdateReducer?.isLoading &&
                <div className="container">
                    <div className="row align-items-center text-center">
                        <div className="col-lg-12 m-auto">
                            <div className="main-heading text-white">
                                <h1>Loading...</h1>
                            </div>
                        </div>
                    </div>
                </div >} */}

            <div className="container">
                <div className="contact-form-details">

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="col-lg-12">
                                <button className="theme-btn1" onClick={onSubmitClick}>Submit <span><i className="fa-solid fa-arrow-right"></i></span></button>
                            </div>
                            <div className="single-input">
                                <input type="text" placeholder="Title" name="title" value={itemDetails.title} onChange={onTitleChange} />
                            </div>
                        </div>
                        <div className="col-lg-12">

                            <SunEditor
                                // {...props}
                                placeholder="Please type here..."
                                // name={name}
                                lang="en"
                                name='body'
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
export default connect(mapStateToProps, { getDataAction, updateDataAction })(CreateForm)