import React from 'react';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <main>
            <section className="slider-area slider-area2">
                <div className="slider-active">
                    <div className="single-slider slider-height2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-11 col-md-12">
                                    <div className="hero__caption hero__caption2">
                                        <h1 data-animation="bounceIn" data-delay="0.2s">Liên hệ</h1>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><NavLink to="/">Trang chủ</NavLink></li>
                                                <li className="breadcrumb-item"><NavLink to="#">Liên hệ</NavLink></li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-section">
                <div className="container">
                    <div className="d-none d-sm-block mb-5 pb-4">
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2 className="contact-title">Liên hệ với chúng tôi</h2>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-contact contact_form" method="post" id="contactForm">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder=" Tin nhắn"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="name" id="name" type="text" placeholder="Họ tên" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="email" id="email" type="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" name="subject" id="subject" placeholder="Chủ đề" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <button type="submit" className="button button-contactForm boxed-btn">Gửi</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-3 offset-lg-1">
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-home"></i></span>
                                <div className="media-body">
                                    <h3>Bachkhoa-Aptech.</h3>
                                    <p>250 Hoàng Quốc Việt</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                                <div className="media-body">
                                    <h3>+1 253 565 2365</h3>
                                    <p>Thứ Hai đến Thứ Sáu, 8 giờ sáng đến 5 giờ chiều</p>
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <h3>support@colorlib.com</h3>
                                    <p>Gửi cho chúng tôi câu hỏi của bạn bất cứ lúc nào!!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact;