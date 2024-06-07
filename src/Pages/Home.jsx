import React from "react";
import { Link } from "react-router-dom";

function Home() {
    const blogList = [
        {
            slug: `Some-Important-Rules-To-Start-A-New-Business`,
            tite: `Some Important Rules To Start A New Business`,
            img: `assets/images/blog/b1.jpg`,
            details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b1.jpg"alt="image"><h3>Some Important Rules To Start A New Business</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
            date: `01 July 2021`,
            comments: [
                {
                    name: `user 1`,
                    comment: ` comment content`
                },
            ],
        },
        {
            slug: `Why-Would-You-Need-Some-New-Business`,
            tite: `Why Would You Need Some New Business`,
            img: `assets/images/blog/b2.jpg`,
            details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b2.jpg"alt="image"><h3>Why Would You Need Some New Business</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
            date: `01 July 2021`,
            comments: [
                {
                    name: `user 1`,
                    comment: ` comment content`
                },
            ],
        },
        {
            slug: `Know-Top-Ten-Rules-For-Corporate-Business`,
            tite: `Know Top Ten Rules For Corporate Business`,
            img: `assets/images/blog/b3.jpg`,
            details: `<div><div class="blog-details-text-area details-text-area pr-20"><img src="assets/images/blog/b3.jpg"alt="image"><h3>Know Top Ten Rules For Corporate Business</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p><div class="blog-quote"><p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charmsof pleasure of the moment.</p><h5><i class="fas fa-quote-right"></i> <span>Katherine</span></h5></div><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscin elit, sed do eiusmod tempor incididunt ut labore doloremagna ut aliqua quis ipsum facilisis. It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as opposed to using 'Content here, content here', making itlook like readable English.</p></div><div class="blog-text-footer pr-20"><div class="tag-area"><ul><li><i class="fas fa-tags"></i></li><li>Strategy,</li><li>Marketing,</li><li>Support</li></ul></div><div class="social-icons"><ul><li><span>Share:</span></li><li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li><li><a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li><li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li><li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li></ul></div></div><div class="bd-comments details-text-area pr-20"><h3>Comments</h3><div class="comment-card"><img src="assets/images/testimonial/tc1.jpg" alt="image"><h5>David Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div><div class="comment-card"><img src="assets/images/testimonial/tc2.jpg" alt="image"><h5>Jemmy Makel</h5><p>The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nutargy bargy vagabond buggered dropped.</p><a href="#bd-form">Reply</a></div></div><div class="bd-form details-text-area bg-f9faff pr-20" id="bd-form"><h3>Leave A Reply</h3><form><div class="row"><div class="col-md-6"><input type="text" class="form-control" placeholder="Name" required=""></div><div class="col-md-6"><input type="email" class="form-control" placeholder="Email" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Phone" required=""></div><div class="col-md-6"><input type="text" class="form-control" placeholder="Website" required=""></div><div class="col-md-12"><textarea rows="5" class="form-control" placeholder="Message"required=""></textarea></div><div class="col-md-12"><button class="default-button" type="submit"><span>Post AComment</span></button></div></div></form></div></div>`,
            date: `01 July 2021`,
            comments: [
                {
                    name: `user 1`,
                    comment: ` comment content`
                },
            ],
        },
    ];
    return (
        <>

            {/* Start Home Banner */}

            <div className="home-banner">
                <div className="shapes">
                    <img className="shape1" src="assets/images/shape/dot-1.png" alt="shape" />
                    <img className="shape2" src="assets/images/shape/dot-2.png" alt="shape" />
                    <img className="shape3" src="assets/images/shape/dot-3.png" alt="shape" />
                    <img className="shape4" src="assets/images/shape/cross.png" alt="shape" />
                    <img className="shape5" src="assets/images/shape/dot-1.png" alt="shape" />
                    <img className="shape6" src="assets/images/shape/dot-2.png" alt="shape" />
                    <img className="shape7" src="assets/images/shape/dot-3.png" alt="shape" />
                    <img className="shape8" src="assets/images/shape/cross.png" alt="shape" />
                    <img className="shape9" src="assets/images/shape/banner-circle.png" alt="shape" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="banner-text-area-2 pr-20">
                                <h6>Innovate. Integrate. Reform. Your Pathway to Success.</h6>
                                <h2>Crafting Solutions Beyond Boundaries, Driving Progress Together.</h2>
                                <p>Reform Solution Pvt. Ltd. – where vision meets execution. With a focus on innovation and a dedication to quality, we're committed to delivering solutions that drive real-world impact. From streamlining processes to enhancing customer experiences, our comprehensive suite of services caters to diverse industry needs. Partner with us and unlock the full potential of your business.</p>
                                <Link to="/services" className="default-button-3">
                                    Our Services <i className="fas fa-long-arrow-alt-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-img-2">
                                <img src="assets/images/banner/Banner_Home_1.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End Home Banner */}

            {/* Start Partner Icon */}

            <div className="partner ptb-70 bg-f9faff">
                <div className="container">
                    <div className="partner-slider-area owl-carousel">
                        <img src="assets/images/brand/br1.png" alt="image" />
                        <img src="assets/images/brand/br2.png" alt="image" />
                        <img src="assets/images/brand/br3.png" alt="image" />
                        <img src="assets/images/brand/br4.png" alt="image" />
                        <img src="assets/images/brand/br5.png" alt="image" />
                        <img src="assets/images/brand/br6.png" alt="image" />
                    </div>
                </div>
            </div>

            {/* End Partner Icon */}

            <div className="service pt-100">
                <div className="container">
                    <div className="default-section-title default-section-title-2 default-section-title-middle">
                        <h6>Services</h6>
                        <h3>We are the leading software company in the region.</h3>
                    </div>
                    <div className="section-content">
                        <div className="service-slider-area service-slider-area-2 owl-carousel">
                            <div className="service-card-2">
                                <span></span>
                                <div className="service-card-content">
                                    <div className="service-card-2-img">
                                        <img src="assets/images/icons/011-content-1.png" alt="image" />
                                    </div>
                                    <h4>Content Management</h4>
                                    <p>Empower your business with cutting-edge content management solutions tailored for seamless digital experiences.</p>
                                    <a className="default-button-3 default-button-3-h" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                            <div className="service-card-2">
                                <span></span>
                                <div className="service-card-content">
                                    <div className="service-card-2-img">
                                        <img src="assets/images/icons/012-analytic.png" alt="image" />
                                    </div>
                                    <h4>Statistic Analysis</h4>
                                    <p>Unlock the power of data with our advanced statistical analysis solutions designed for dynamic business insights.</p>
                                    <a className="default-button-3 default-button-3-h" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                            <div className="service-card-2">
                                <span></span>
                                <div className="service-card-content">
                                    <div className="service-card-2-img">
                                        <img src="assets/images/icons/013-customer-service-agent.png" alt="image" />
                                    </div>
                                    <h4>Support Service</h4>
                                    <p>Experience unparalleled support with our dedicated service team, available 24/7 to ensure your operations run smoothly.</p>
                                    <a className="default-button-3 default-button-3-h" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                            <div className="service-card-2">
                                <span></span>
                                <div className="service-card-content">
                                    <div className="service-card-2-img">
                                        <img src="assets/images/icons/025-browser.png" alt="image" />
                                    </div>
                                    <h4 className="title">Security Management</h4>
                                    <p>Fortify your digital landscape with our comprehensive security management services, designed to protect against evolving cyber threats.</p>
                                    <a className="default-button-3 default-button-3-h" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="about ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="assets/images/about/a1.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text-area pl-20">
                                <div className="default-section-title default-section-title-2">
                                    <h6>ABOUT US</h6>
                                    <h3>Reform Sol is the premier SaaS solution on the market</h3>
                                </div>
                                <p>Best Strategic planning dolor sit amet consectetur adipis cing elit. Scelerisque amet odio velit auctor. nam elit nulla eget sodales dui pulvinar. Best Strategic planning dolor sit sectetur morethe Scelerisque amet odio velit eu auctor.</p>
                                <div className="about-list">
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet into consectetur adipis cing elit</li>
                                        <li>Amet into consectetur best strategic planning sit.</li>
                                        <li>Best odio velit auctor nam elit nulla eget sodales dui pulvinar.</li>
                                    </ul>
                                </div>
                                <a className="default-button-3" href="#">Read More <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div className="features ptb-100 bg-f9faff">
                <div className="container">
                    <div className="default-section-title default-section-title-2 default-section-title-middle">
                        <h6>Features</h6>
                        <h3>We Have Some Easy Way to Features Working</h3>
                    </div>
                    <div className="section-content">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/022-language.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4 className="title">Product Engineering</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/023-driver-license.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4 className="title">License Management</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/024-data.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4 className="title">Real Time & Data</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/025-browser.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4 className="title">Automatic Updates</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/026-compliant.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4 className="title">Quality Product</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/029-fair.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4>Access Benefits</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div className="intro ptb-100">
                <div className="container">
                    <div className="intro-content">
                        <div className="shape">
                            <img className="shape3" src="assets/images/shape/shape3.png" alt="image" />
                            <img className="shape4" src="assets/images/shape/shape4.png" alt="image" />
                        </div>
                        <div className="default-section-title default-section-title-2 default-section-title-middle">
                            <h6>Intro</h6>
                            <h3>Powerful Services Offered in SAAS Development</h3>
                        </div>
                        <div className="section-content">
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className="intro-video">
                                        <img src="assets/images/intro-bg.png" alt="image" />
                                        <div className="play-button">
                                            <a className="video-popup" href="https://www.youtube.com/watch?v=FkqoOkor9T8"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intro-bottom-card-area pt-70">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card features-card-2">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/028-analytics.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4>Better Comparison</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card features-card-2">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/029-fair.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4>Breaking The Rules</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="features-card features-card-2">
                                    <div className="features-card-img">
                                        <img src="assets/images/icons/030-pencil.png" alt="image" />
                                    </div>
                                    <div className="features-card-text-area">
                                        <h4>Faster Enrollments</h4>
                                        <p>Building it before the de dolor sit full fledged application is openlir that always payset goden</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div className="app-integration pb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-2 default-section-title-middle">
                        <h6>APPS</h6>
                        <h3>150+ App Intregration To Makes More Productive</h3>
                    </div>
                    <div className="section-content">
                        <div className="first-row">
                            <div className="app-icon" data-speed="0.1" data-revert="true">
                                <img src="assets/images/icons/014-search.png" alt="logo" />
                            </div>
                            <div className="app-icon" data-speed="0.2" data-revert="true">
                                <img src="assets/images/icons/015-playstore.png" alt="logo" />
                            </div>
                            <div className="app-icon" data-speed="0.1" data-revert="true">
                                <img src="assets/images/icons/017-microsoft.png" alt="logo" />
                            </div>
                            <div className="app-icon" data-speed="0.2" data-revert="true">
                                <img src="assets/images/icons/016-chrome.png" alt="logo" />
                            </div>
                            <div className="app-icon" data-speed="0.1" data-revert="true">
                                <img src="assets/images/icons/018-skype.png" alt="logo" />
                            </div>
                        </div>
                        <div className="second-row">
                            <div className="app-icon" data-speed="0.1" data-revert="true">
                                <img src="assets/images/icons/019-pinterest.png" alt="logo" />
                            </div>
                            <div className="app-icon" data-speed="0.2" data-revert="true">
                                <img src="assets/images/icons/020-envato.png" alt="logo" />
                            </div>
                            <div className="app-icon" data-speed="0.1" data-revert="true">
                                <img src="assets/images/icons/021-instagram.png" alt="logo" />
                            </div>
                            <div className="app-icon" data-speed="0.2" data-revert="true">
                                <img src="assets/images/icons/039-whatsapp-1.png" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div className="testimonial testimonial-2-bg bg-f9faff ptb-100">
                <div className="container">
                    <div className="default-section-title default-section-title-2 default-section-title-middle">
                        <h6>TESTIMONIALS</h6>
                        <h3>Join Hundreds Of Successful Organizations</h3>
                    </div>
                    <div className="section-content">
                        <div className="testimonial-slider-area-2 owl-carousel">
                            <div className="testimonial-card-2">
                                <i className="fas fa-quote-right"></i>
                                <div className="testimonial-header-2">
                                    <img src="assets/images/testimonial/tc1.jpg" alt="image" />
                                    <div className="testimonial-footer-text">
                                        <h4>Devid Miler</h4>
                                        <p>Developer</p>
                                    </div>
                                </div>
                                <div className="testimonial-card-text-2">
                                    <p>But building it before the evull-fledged applicao eius mod tempor dunt ut ore et dolore magna aliqua. enim ad min im veniam, quis nostrud xercitati mco laboris nisi amet magna.</p>
                                    <div className="stars">
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="far fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card-2">
                                <i className="fas fa-quote-right"></i>
                                <div className="testimonial-header-2">
                                    <img src="assets/images/testimonial/tc3.jpg" alt="image" />
                                    <div className="testimonial-footer-text">
                                        <h4>Linkon Alan</h4>
                                        <p>Engineer</p>
                                    </div>
                                </div>
                                <div className="testimonial-card-text-2">
                                    <p>But building it before the evull-fledged applicao eius mod tempor dunt ut ore et dolore magna aliqua. enim ad min im veniam, quis nostrud xercitati mco laboris nisi amet magna.</p>
                                    <div className="stars">
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="far fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card-2">
                                <i className="fas fa-quote-right"></i>
                                <div className="testimonial-header-2">
                                    <img src="assets/images/testimonial/tc2.jpg" alt="image" />
                                    <div className="testimonial-footer-text">
                                        <h4>Jack Abraham</h4>
                                        <p>Designer</p>
                                    </div>
                                </div>
                                <div className="testimonial-card-text-2">
                                    <p>But building it before the evull-fledged applicao eius mod tempor dunt ut ore et dolore magna aliqua. enim ad min im veniam, quis nostrud xercitati mco laboris nisi amet magna.</p>
                                    <div className="stars">
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="far fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card-2">
                                <i className="fas fa-quote-right"></i>
                                <div className="testimonial-header-2">
                                    <img src="assets/images/testimonial/tc4.jpg" alt="image" />
                                    <div className="testimonial-footer-text">
                                        <h4>Abraham Tomas</h4>
                                        <p>Developer</p>
                                    </div>
                                </div>
                                <div className="testimonial-card-text-2">
                                    <p>But building it before the evull-fledged applicao eius mod tempor dunt ut ore et dolore magna aliqua. enim ad min im veniam, quis nostrud xercitati mco laboris nisi amet magna.</p>
                                    <div className="stars">
                                        <ul>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="far fa-star"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div className="why-we pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="why-we-img-2">
                                <img src="assets/images/why-we/ww2.png" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="why-we-text-area-2 pl-20">
                                <div className="default-section-title default-section-title-2">
                                    <h6>Choose</h6>
                                    <h3>One Of The Three Main Categories Of SASS Solution</h3>
                                </div>
                                <p>We esent fermentum elit sed libero egestas ullamcorper. auris pharetra set dolor labore magna nulla id augue auctor placerat. proin tortor leo, convallis a mi a, feugiate aliqua sit amet aliquam dui. cursus auctor nisl non vulputate insididunt ipsum jaber quite amet.</p>
                                <div className="progress-bar-area">
                                    <div id="bar1" className="barfiller">
                                        <span className="label">Pixel Perfect Design</span>
                                        <span className="tip"></span>
                                        <span className="fill" data-percentage="80"></span>
                                    </div>
                                    <div id="bar2" className="barfiller">
                                        <span className="label">Unique & Minimal Design</span>
                                        <span className="tip"></span>
                                        <span className="fill" data-percentage="85"></span>
                                    </div>
                                    <div id="bar3" className="barfiller">
                                        <span className="label">24/7 Free Online Support</span>
                                        <span className="tip"></span>
                                        <span className="fill" data-percentage="95"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            {/* <div className="fun-facts pt-70 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg col-md-4 col-sm-4 col-6">
                            <div className="fun-facts-card">
                                <h2><span className="odometer" data-count="10">00</span>k<sup>+</sup></h2>
                                <p>Project Completed</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-sm-4 col-6">
                            <div className="fun-facts-card">
                                <h2><span className="odometer" data-count="25">00</span>k<sup>+</sup></h2>
                                <p>Years Of Experience</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-sm-4 col-6">
                            <div className="fun-facts-card">
                                <h2><span className="odometer" data-count="76">00</span>k<sup>+</sup></h2>
                                <p>Running Project</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-sm-4 col-6">
                            <div className="fun-facts-card">
                                <h2><span className="odometer" data-count="30">00</span>k<sup>+</sup></h2>
                                <p>Team Member</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-sm-4 col-6">
                            <div className="fun-facts-card">
                                <h2><span className="odometer" data-count="03">00</span>k<sup>+</sup></h2>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="blog ptb-100 bg-f9faff">
                <div className="container">
                    <div className="default-section-title default-section-title-2 default-section-title-middle">
                        <h6>BLOG</h6>
                        <h3>Our Popular Blog Post</h3>
                    </div>
                    <div className="section-content">
                        <div className="row justify-content-center">
                            {blogList?.length && blogList.map(blog =>
                                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                                    <div className="blog-card">
                                        <div className="blog-img">
                                            <Link to={`/blog/${blog.slug}`}><img src={blog.img} alt="image" /></Link>
                                        </div>
                                        <div className="blog-text-area">
                                            <span>TECHNOLOGY</span>
                                            <div className="blog-date">
                                                <ul>
                                                    <li><i className="fas fa-user"></i> By Admin</li>
                                                    <li><i className="far fa-comments"></i> {blog.comments.length}</li>
                                                    <li><i className="far fa-calendar-alt"></i>{blog.date}</li>
                                                </ul>
                                            </div>
                                            <h4><Link to={`/blog/${blog.slug}`}>{blog.tite}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;
