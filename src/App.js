import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Pages/Services ';
import ServiceDetails from './Pages/ServiceDetails';
import Project from './Pages/Project.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
import Blogs from './Pages/Blog';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';

import CaseStudy from './Pages/CaseStudy';
import CaseDetails from './Pages/CaseDetails';
import BlogDetails from './Pages/BlogDetails';
import ContentEditor from './Pages/Admin/contentEditor.jsx';
import DataListComponnt from './Pages/Admin/DataListComponnt.jsx';
import CreateForm from './Pages/Admin/CreateForm.jsx';

function App() {
  return (

    <>
      <BrowserRouter>
        {/* <a href="#" > */}
        <div className="paginacontainer">
          <div className="progress-wrap progress-wrap2">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
        </div>
        {/* </a> */}
        {/* <Loading /> */}
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={AboutUs} />
          <Route path="/services" Component={Services} />
          <Route path="/service/:serviceSlug" Component={ServiceDetails} />
          <Route path="/blogs" Component={Blogs} />
          <Route path="/blog/:blogSlug" Component={BlogDetails} />
          <Route path="/project" Component={Project} />
          <Route path="/project/:projectSlug" Component={ProjectDetails} />
          {/* <Route path="/case-study" Component={CaseStudy} />
          <Route path="/case-study/:caseStudySlug" Component={CaseDetails} /> */}
          <Route path="/*" Component={Home} />
          <Route path="/contact" Component={Contact} />
          <Route path="/admin/data-list-componnt" Component={DataListComponnt} />
          <Route path="/admin/content-editor" Component={ContentEditor} />
          <Route path="/admin/create-content-editor" Component={CreateForm} />
        </Routes>
        {/* <ScrollToTop /> */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
