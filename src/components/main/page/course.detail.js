import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CourseService from '../../../services/Course.service';



const CourseDetail = () => {
    const param = useParams();
    const [course, setCourse] = useState({});

    const getCourse = async () => {
        let slug = param.slug;
        let data = await CourseService.getBySlug(slug);
        setCourse(data);
    }

    useEffect(() => {
        getCourse();
    });


    return (
        <main>
            <section className="slider-area slider-area2">
                <div className="slider-active">
                    <div className="single-slider slider-height2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-11 col-md-12">
                                    <div className="hero__caption hero__caption2">
                                        <h1 data-animation="bounceIn" data-delay="0.2s">{course.name}</h1>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><NavLink to="/">Trang chủ</NavLink></li>
                                                <li className="breadcrumb-item"><NavLink to="#">Chi tiết khoá học</NavLink></li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_area single-post-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            <div className="single-post">
                                <div className="feature-img">
                                    <img className="img-fluid" src={course.image} alt="" />
                                </div>
                                <div className="blog_details">
                                    <h2 style={{ color: "#2d2d2d" }}>{course.name}</h2>
                                    <ul className="blog-info-link mt-3 mb-4">
                                        <li><i className="fa fa-clock"></i> {course.created}</li>
                                    </ul>
                                    <div dangerouslySetInnerHTML={{ __html: course.description }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li className="button-header margin-left "><NavLink to="/" className="btn">Đăng ký khoá học</NavLink></li>
                </div>
            </section>
        </main>
    )
}

export default CourseDetail;