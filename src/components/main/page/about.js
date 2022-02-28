import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <main>
            <section className="slider-area slider-area2">
                <div className="slider-active">
                    <div className="single-slider slider-height2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-11 col-md-12">
                                    <div className="hero__caption hero__caption2">
                                        <h1>About us</h1>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                                <li className="breadcrumb-item"><NavLink to="#">about</NavLink></li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="services-area services-area2 section-padding40">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-30">
                                <div className="features-icon">
                                    <img src="assets/img/icon/icon1.svg" alt="" />
                                </div>
                                <div className="features-caption">
                                    <h3>60+ UX courses</h3>
                                    <p>The automated process all your website tasks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-30">
                                <div className="features-icon">
                                    <img src="assets/img/icon/icon2.svg" alt="" />
                                </div>
                                <div className="features-caption">
                                    <h3>Expert instructors</h3>
                                    <p>The automated process all your website tasks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-30">
                                <div className="features-icon">
                                    <img src="assets/img/icon/icon3.svg" alt="" />
                                </div>
                                <div className="features-caption">
                                    <h3>Life time access</h3>
                                    <p>The automated process all your website tasks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="about-area1 fix pt-10">
                <div className="support-wrapper align-items-center">
                    <div className="left-content1">
                        <div className="about-icon">
                            <img src="assets/img/icon/about.svg" alt="" />
                        </div>
                        <div className="section-tittle section-tittle2 mb-55">
                            <div className="front-text">
                                <h2 className="">Learn new skills online with top educators</h2>
                                <p>The automated process all your website tasks. Discover tools and
                                    techniques to engage effectively with vulnerable children and young
                                    people.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Techniques to engage effectively with vulnerable children and young people.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Join millions of people from around the world  learning together.</p>
                            </div>
                        </div>

                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Join millions of people from around the world learning together. Online learning is as easy and natural.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content1">
                        <div className="right-img">
                            <img src="assets/img/gallery/about.png" alt="" />

                            <div className="video-icon" >
                                <NavLink className="popup-video btn-icon" to="https://www.youtube.com/watch?v=up68UAfH0d0"><i className="fas fa-play"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="topic-area section-padding40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <h2>Explore top subjects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="assets/img/gallery/topic1.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="assets/img/gallery/topic2.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="assets/img/gallery/topic3.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="assets/img/gallery/topic4.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="assets/img/gallery/topic5.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="assets/img/gallery/topic6.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="assets/img/gallery/topic7.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="assets/img/gallery/topic8.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-12">
                            <div className="section-tittle text-center mt-20">
                                <NavLink to="courses.html" className="border-btn">View More Subjects</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="about-area3 fix">
                <div className="support-wrapper align-items-center">
                    <div className="right-content3">
                        <div className="right-img">
                            <img src="assets/img/gallery/about3.png" alt="" />
                        </div>
                    </div>
                    <div className="left-content3">
                        <div className="section-tittle section-tittle2 mb-20">
                            <div className="front-text">
                                <h2 className="">Learner outcomes on courses you will take</h2>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Techniques to engage effectively with vulnerable children and young people.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Join millions of people from around the world
                                    learning together.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Join millions of people from around the world learning together.
                                    Online learning is as easy and natural.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-area section-padding40 fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <h2>Community experts</h2>
                            </div>
                        </div>
                    </div>
                    <div className="team-active">
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="assets/img/gallery/team1.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. Urela</NavLink></h5>
                                <p>The automated process all your website tasks.</p>
                            </div>
                        </div>
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="assets/img/gallery/team2.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. Uttom</NavLink></h5>
                                <p>The automated process all your website tasks.</p>
                            </div>
                        </div>
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="assets/img/gallery/team3.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. Shakil</NavLink></h5>
                                <p>The automated process all your website tasks.</p>
                            </div>
                        </div>
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="assets/img/gallery/team4.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. Arafat</NavLink></h5>
                                <p>The automated process all your website tasks.</p>
                            </div>
                        </div>
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="assets/img/gallery/team3.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. saiful</NavLink></h5>
                                <p>The automated process all your website tasks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About;