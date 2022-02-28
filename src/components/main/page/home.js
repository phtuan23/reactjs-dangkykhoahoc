import React from 'react';
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <main>
            <section className="slider-area ">
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-12">
                                    <div className="hero__caption">
                                        <h1 >Khoá học <br /> Lập trình</h1>
                                        <p >Xây dựng kỹ năng với các khóa học, chứng chỉ và bằng cấp trực tuyến từ các trường đại học và công ty đẳng cấp thế giới</p>
                                        <NavLink to="/register-course" className="btn hero-btn">Đăng ký ngay</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="services-area">
                <div className="container">
                    <div className="row justify-content-sm-center">
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-30">
                                <div className="features-icon">
                                    <img src="/resources/assets/img/icon/icon1.svg" alt="" />
                                </div>
                                <div className="features-caption">
                                    <h3>Hơn 60 khoá học</h3>
                                    <p>Lập trình Fullstack.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-30">
                                <div className="features-icon">
                                    <img src="/resources/assets/img/icon/icon2.svg" alt="" />
                                </div>
                                <div className="features-caption">
                                    <h3>Chuyên gia hướng dẫn</h3>
                                    <p>Hướng dẫn chi tiết.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className="single-services mb-30">
                                <div className="features-icon">
                                    <img src="/resources/assets/img/icon/icon3.svg" alt="" />
                                </div>
                                <div className="features-caption">
                                    <h3>Hỗ trợ trọn đời</h3>
                                    <p>Hỗ trợ trọn đời.</p>
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
                            <img src="/resources/assets/img/icon/about.svg" alt="" />
                        </div>
                        <div className="section-tittle section-tittle2 mb-55">
                            <div className="front-text">
                                <h2 className="">Học những công nghệ <br /> hàng đầu</h2>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="/resources/assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Lập trình Web Fullstack.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="/resources/assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Lập trình thiết bị di động.</p>
                            </div>
                        </div>

                        <div className="single-features">
                            <div className="features-icon">
                                <img src="/resources/assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Lập trình ứng dụng Windows.</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-content1">
                        <div className="right-img">
                            <img src="/resources/assets/img/gallery/about.png" alt="" />

                            <div className="video-icon" >
                                <img src="https://e4life.vn/wp-content/uploads/2021/09/Tu-vung-tieng-Anh-chu-de-Technology.jpg" alt='' />
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
                                <h2>Khám phá những khoá học hàng đầu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-topic text-center mb-30">
                                <div className="topic-img">
                                    <img src="/resources/assets/img/gallery/topic1.png" alt="" />
                                    <div className="topic-content-box">
                                        <div className="topic-content">
                                            <h3><NavLink to="#">Programing</NavLink></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="about-area3 fix">
                <div className="support-wrapper align-items-center">
                    <div className="right-content3">
                        <div className="right-img">
                            <img src="/resources/assets/img/gallery/about3.png" alt="" />
                        </div>
                    </div>
                    <div className="left-content3">
                        <div className="section-tittle section-tittle2 mb-20">
                            <div className="front-text">
                                <h2 className="">Kết quả học viên sẽ đạt được</h2>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="/resources/assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Kinh nghiệm làm dự án thực tế qua từng môn học.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="/resources/assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Tiếp cận với những công nghệ hàng đầu.</p>
                            </div>
                        </div>
                        <div className="single-features">
                            <div className="features-icon">
                                <img src="/resources/assets/img/icon/right-icon.svg" alt="" />
                            </div>
                            <div className="features-caption">
                                <p>Cam kết mức lương 8tr sau tốt nghiệp</p>
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
                                <h2>Chuyên gia hàng đầu</h2>
                            </div>
                        </div>
                    </div>
                    <div className="team-active">
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="/resources/assets/img/gallery/team1.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. Urela</NavLink></h5>
                                <p>Quá trình tự động hóa tất cả các tác vụ trang web của bạn..</p>
                            </div>
                        </div>
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="/resources/assets/img/gallery/team2.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. Uttom</NavLink></h5>
                                <p>Quá trình tự động hóa tất cả các tác vụ trang web của bạn.</p>
                            </div>
                        </div>
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="/resources/assets/img/gallery/team3.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. Shakil</NavLink></h5>
                                <p>Quá trình tự động hóa tất cả các tác vụ trang web của bạn..</p>
                            </div>
                        </div>
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="/resources/assets/img/gallery/team4.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. Arafat</NavLink></h5>
                                <p>Quá trình tự động hóa tất cả các tác vụ trang web của bạn..</p>
                            </div>
                        </div>
                        <div className="single-cat text-center">
                            <div className="cat-icon">
                                <img src="/resources/assets/img/gallery/team3.png" alt="" />
                            </div>
                            <div className="cat-cap">
                                <h5><NavLink to="services.html">Mr. saiful</NavLink></h5>
                                <p>Quá trình tự động hóa tất cả các tác vụ trang web của bạn..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-area2 fix pb-padding">
                <div className="support-wrapper align-items-center">
                    <div className="right-content2">
                        <div className="right-img">
                            <img src="/resources/assets/img/gallery/about2.png" alt="" />
                        </div>
                    </div>
                    <div className="left-content2">
                        <div className="section-tittle section-tittle2 mb-20">
                            <div className="front-text">
                                <h2 className="">Từng bước thực hiện đam mê với những chuyên gia hàng đầu.</h2>
                                <p>Thực hiện bước tiếp theo hướng tới các mục tiêu cá nhân và nghề nghiệp của bạn với chúng tôi.</p>
                                <NavLink to="#" className="btn">Tham gia ngay</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;