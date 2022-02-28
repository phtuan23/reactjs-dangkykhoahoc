import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import CourseServices from '../../../services/Course.service';
import Swal from 'sweetalert2'

const initialValues = {
    name: "",
    email: "",
    address: "",
    phone: "",
    message: "",
    status: 1,
    course: {
        id: ""
    }
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập họ tên"),
    email: Yup.string().required("Vui lòng nhập email").email("Email không đúng"),
    phone: Yup.string().required("Vui lòng nhập số điện thoại").min(10, "Số điện thoại phải có 10 ký tự"),
    address: Yup.string().required("Vui lòng nhập địa chỉ hiện tại")
})

const RegisterCourse = () => {
    const [course, setCourse] = useState([]);



    useEffect(() => {
        const getCourses = async () => {
            let data = await CourseServices.getAll();
            setCourse(data)
        }
        getCourses();
    }, []);


    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            let res = await axios.post(`http://localhost:8080/api/register-course/create`, values);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thành công',
                    text: 'Đăng ký khoá học thành công'
                });
                formik.resetForm();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Thất bại',
                    text: 'Đăng ký khoá học không thành công'
                });
            }
        }
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
                                        <h1 data-animation="bounceIn" data-delay="0.2s">Đăng ký khoá học</h1>
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><NavLink to="/">Trang chủ</NavLink></li>
                                                <li className="breadcrumb-item"><NavLink to="#">ăng ký khoá học</NavLink></li>
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
                            <h2 className="contact-title">Đăng ký khoá học</h2>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-contact" method="post" onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea value={formik.values.message} className="form-control w-100" name="message" id="message" cols="30" rows="9" onChange={formik.handleChange} placeholder=" Tin nhắn"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" value={formik.values.name} name="name" id="name" type="text" placeholder="Họ tên" onChange={formik.handleChange} />
                                            {formik.errors.name && formik.touched.name ? (
                                                <div className="text-danger mt-1 p-1">{formik.errors.name}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" value={formik.values.email} name="email" id="email" type="email" placeholder="Email" onChange={formik.handleChange} />
                                            {formik.errors.email && formik.touched.email ? (
                                                <div className="text-danger mt-1 p-1">{formik.errors.email}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" value={formik.values.phone} name="phone" id="phone" placeholder="Số điện thoại" onChange={formik.handleChange} />
                                            {formik.errors.phone && formik.touched.phone ? (
                                                <div className="text-danger mt-1 p-1">{formik.errors.phone}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control" value={formik.values.address} name="address" id="address" placeholder="Địa chỉ" onChange={formik.handleChange} />
                                            {formik.errors.address && formik.touched.address ? (
                                                <div className="text-danger mt-1 p-1">{formik.errors.address}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <select value={formik.values.course.id} name="course.id" onChange={formik.handleChange} className="custom-select custom-select-lg mb-3 p-2" style={{ height: 50 }}>
                                                <option>Chọn Khoá học muốn đăng ký</option>
                                                {course.map(c => {
                                                    return (
                                                        <option key={c.id} value={c.id}>{c.name}</option>
                                                    )
                                                })}
                                            </select>
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

export default RegisterCourse;