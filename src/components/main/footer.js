import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrappper footer-bg">
                <div className="footer-area footer-padding">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="footer-logo mb-25">
                                            <NavLink to="/"><img src="/resources/assets/img/logo/logo2_footer.png" alt="ảnh" /></NavLink>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>Thực hiện bước tiếp theo hướng tới các mục tiêu cá nhân và nghề nghiệp của bạn với chúng tôi.</p>
                                            </div>
                                        </div>
                                        <div className="footer-social">
                                            <NavLink to="#"><i className="fab fa-twitter"></i></NavLink>
                                            <NavLink to="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></NavLink>
                                            <NavLink to="#"><i className="fab fa-pinterest-p"></i></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Trang chủ</h4>
                                        <ul>
                                            <li><NavLink to="/course">Khoá học</NavLink></li>
                                            <li><NavLink to="/about">Về chúng tôi</NavLink></li>
                                            <li><NavLink to="/contact">Liên hệ</NavLink></li>
                                            <li><NavLink to="/blog">Bài viết</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Tham gia ngay</h4>
                                        <ul>
                                            <li><NavLink to="/login">Đăng nhập</NavLink></li>
                                            <li><NavLink to="/register">Đăng ký</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Doanh nghiệp liên kết</h4>
                                        <ul>
                                            <li><NavLink to="#">FPT Sortware</NavLink></li>
                                            <li><NavLink to="#">FPT Sortware</NavLink></li>
                                            <li><NavLink to="#">FPT Sortware</NavLink></li>
                                            <li><NavLink to="#">FPT Sortware</NavLink></li>
                                            <li><NavLink to="#">FPT Sortware</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;