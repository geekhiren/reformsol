import { Link } from "react-router-dom";
import span2 from "../assets/img/icons/span2.png"
import mainIconSmall from "../assets/img/logo/main_icon_small.png"
import slider_logo1 from "../assets/img/logo/slider-logo1.png"
import slider_logo2 from "../assets/img/logo/slider-logo2.png"
import slider_logo3 from "../assets/img/logo/slider-logo3.png"
import slider_logo4 from "../assets/img/logo/slider-logo4.png"
import slider_logo5 from "../assets/img/logo/slider-logo5.png"
import slider_logo6 from "../assets/img/logo/slider-logo6.png"
import slider_logo7 from "../assets/img/logo/slider-logo7.png"


export default function CommonHero({ mainTitle, subTitle, showBreadCrumb = true }) {
  return <>
    <div className="common-hero">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-12 m-auto">
            <div className="main-heading">
              {showBreadCrumb ?
                <h1>{mainTitle}</h1> :
                <h2 className="text-white">{mainTitle}</h2>}

              <div className="space16"></div>
              {showBreadCrumb &&
                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                  <img src={mainIconSmall} alt="" />
                  <Link to="/">Home</Link>
                  <span className="arrow"><i className="fa-regular fa-angle-right"></i></span>
                  {subTitle}
                </span>
              }
            </div>
          </div>
        </div>
      </div>
    </div >
    <section className="hero10-benar">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <div className="marquee-wrap marquee-wrap-inner">
              <div className="marquee-text">

                <div className="brand-single-box">
                  <img src={slider_logo1} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo2} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo3} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo4} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo5} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo6} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo7} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo1} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo2} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo3} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo4} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo5} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo6} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo7} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo4} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo5} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo6} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo7} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo1} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo2} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo3} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo4} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo5} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo6} alt="" />
                </div>

                <div className="brand-single-box">
                  <img src={slider_logo7} alt="" />
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="slider-after"></div>
      </div>
    </section>

    <div className="space100"></div>
  </>
}