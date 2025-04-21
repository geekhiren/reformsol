import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import tes2_icon from "../assets/img/icons/tes2-icon.png"
import span2 from "../assets/img/icons/span2.png"
import mainIconSmall from "../assets/img/logo/main_icon_small.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const reviews = [{
    content: "I have been thoroughly impressed with the level of service and expertise provided by Reformsol. Their team went above and beyond to understand our business needs and deliver a custom software solution. I highly recommend them to anyone looking for top-notch technology solutions.",
    writer: "Jason Behrendorff",
    ratting: 5
},
{
    content: "We approached Reformsol with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and dedication to client satisfaction are truly commendable.",
    writer: "Matthew Kuhnemann",
    ratting: 5
},
{
    content: "Reformsol has been our go-to partner for IT support for several years now, and they have consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable. Thanks to their expertise, we've been able to overcome various IT challenges focus growing business.",
    writer: "Scott Boland",
    ratting: 5
},
{
    content: "I have been thoroughly impressed with the level of service and expertise provided by Reformsol. Their team went above and beyond to understand our business needs and deliver a custom software solution. I highly them to anyone looking for top-notch technology solutions.",
    writer: "Jason Behrendorff",
    ratting: 5
},
{
    content: "We approached Reformsol with a complex IT problem, and they were able to provide an innovative solution that addressed our needs perfectly. Their team's creativity, technical prowess, and dedication to client satisfaction are truly commendable.",
    writer: "Matthew Kuhnemann",
    ratting: 5
},
{
    content: "Reformsol has been our go-to partner for IT support for several years now, and they have consistently delivered outstanding service. Their team is highly responsive, knowledgeable, reliable. Thanks to their expertise, we've been able to overcome various IT challenges focus growing business.",
    writer: "Scott Boland",
    ratting: 5
},]

export default function Testimonials() {
    return (
        <>

            <div className="testimonial2 pt100 pb40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading2">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                                    <img src={mainIconSmall} alt="" /> Testimonials</span>
                                <h2 className="title tg-element-title" data-aos="zoom-in-left" data-aos-duration="700">See What Our Customer Say’s</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space100"></div>

                    <div className="row"  data-aos="fade-up" data-aos-duration="900">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >

                            {reviews.map((review, index) =>
                                <SwiperSlide key={index}>
                                    <div className="single-slider">
                                        <div className="icon">
                                            <img src={tes2_icon} alt="" />
                                        </div>
                                        <p className="pera">"{review.content}"</p>

                                        <div className="bottom-area">
                                            <div className="author">
                                                <a href="#">{review.writer}</a>
                                            </div>
                                            {/* <div className="reating">
                                            <ul>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star"></i></li>
                                                <li><i className="fa-solid fa-star-half"></i></li>
                                            </ul>
                                            <p>(4.5)</p>
                                        </div> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}
