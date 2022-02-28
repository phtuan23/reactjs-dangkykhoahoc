import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from "react-router-dom";
import CategoryCourseService from '../../../services/CategoryCourse.service';
import CourseService from '../../../services/Course.service';
import NumberFormat from 'react-number-format';

const Course = () => {
    const params = useParams();
    const [categoryCourse, setCategoryCourse] = useState([]);
    const [courses, setCourses] = useState([]);
    const [limit, setLimit] = useState(6);

    const displayCourse = courses.slice(0, limit);

    const getCatCourse = async () => {
        let data = await CategoryCourseService.getAll();
        setCategoryCourse(data);
    }

    const getCourse = async () => {
        let data = await CourseService.getAll();
        setCourses(data);
    }



    const onLoadMore = () => {
        setLimit(limit + 6);
    }

    const onHide = () => {
        setLimit(6);
    }

    useEffect(() => {
        if (params.title) {
            const getCourseByCat = async () => {
                let slug = params.title;
                let data = await CourseService.getByCatSlug(slug);
                setCourses(data);
                window.scrollTo(0, 0);
            }
            getCourseByCat();
        } else {
            getCourse();
        }
        getCatCourse();
    }, [params.title]);

    const ButtonLoad = () => {
        if (displayCourse.length === courses.length) {
            return (
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mt-40">
                            <button className="border-btn" onClick={onHide}>Ẩn bớt</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-tittle text-center mt-40">
                            <button className="border-btn" onClick={onLoadMore}>Xem thêm</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <main>
            <section className="slider-area slider-area2">
                <div className="slider-active">
                    <div className="single-slider slider-height2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-11 col-md-12">
                                    <div className="hero__caption hero__caption2">
                                        <h1>Khoá học</h1>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><NavLink to="/">Trang chủ</NavLink></li>
                                                <li className="breadcrumb-item"><NavLink to="#">Khoá học</NavLink></li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="courses-area section-padding40 fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <h2>Khoá học của chúng tôi</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {displayCourse.map(c => {
                            return (
                                <div className="col-lg-4" key={c.id}>
                                    <div className="properties properties2 mb-30">
                                        <div className="properties__card">
                                            <div className="properties__img overlay1">
                                                <NavLink to={{ pathname: `/course/` + c.slug }}><img src={c.image} alt="" style={{ height: 180 }} /></NavLink>
                                            </div>
                                            <div className="properties__caption">
                                                <p>{c.category.name}</p>
                                                <h3><NavLink to={{ pathname: `/course/` + c.slug }}>{c.name}</NavLink></h3>
                                                <p>--------------------------------</p>
                                                <div className="properties__footer d-flex justify-content-between align-items-center">
                                                    <div className="price">
                                                        <span><NumberFormat value={c.price} displayType={'text'} thousandSeparator={true} suffix={'đ'} /></span>
                                                    </div>
                                                </div>
                                                <NavLink to={{ pathname: `/course/` + c.slug }} className="border-btn border-btn2">Xem thêm</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <ButtonLoad />
                </div>
            </div>
            <div className="topic-area section-padding40">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <h2>Danh mục</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            categoryCourse.map(cc => {
                                return (
                                    <div className="col-lg-3 col-md-4 col-sm-6" key={cc.id}>
                                        <div className="single-topic text-center mb-30">
                                            <div className="topic-img">
                                                <img src={cc.image} alt="" style={{ height: 180 }} />
                                                <div className="topic-content-box">
                                                    <div className="topic-content">
                                                        <h3><NavLink to={{ pathname: `/course/c/` + cc.slug }}>{cc.name}</NavLink></h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Course;