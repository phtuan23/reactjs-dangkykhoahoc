import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import UserService from '../../services/User.service';
import jQuery from 'jquery';

const initialValues = {
    name: "",
    phone: "",
    address: "",
    email: "",
    username: "",
    password: "",
    confirm_password: ""
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập họ tên"),
    phone: Yup.string().required("Vui lòng nhập số điện thoại"),
    address: Yup.string().required("Vui lòng nhập địa chỉ"),
    email: Yup.string().required("Vui lòng nhập email").email("Email không đúng định dạng"),
    username: Yup.string().required("Vui lòng nhập tên đăng nhập"),
    password: Yup.string().required("Vui lòng nhập mật khẩu").min(6, "Mật khẩu tối thiểu 6 ký tự"),
    confirm_password: Yup.string().required("Vui lòng xác nhận mật khẩu").oneOf([Yup.ref('password'), null], "Mật khẩu không trùng khớp")
});

const Register = () => {
    const history = useHistory();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async values => {
            let res = await UserService.save(values);
            if (res.data === 200) {
                history.push({
                    pathname: "/login",
                    props: { message: "Đăng ký thành công!" }
                })
            } else {
                let err = "";
                jQuery.each(res.data, (index, value) => {
                    err += "<li>" + value + "</li>";
                });
                Swal.fire({
                    icon: 'error',
                    html: err
                });
            }
        }
    });


    return (
        <div>
            <main className="login-body" style={{ backgroundImage: `url("https://blogger.googleusercontent.com/img/a/AVvXsEhGFHFelpzpZBR3QzhtsATlCgmneBcCYr9i-bA75tEGWqVVdWcyzGBg1U9s253yENbGXseHnO0MC75tsbz-2b_-L7ONHts77KY4KyxqMG0RaZ1unO_HxZt98vf1BjvexRWvSP635WFNbXNqKFSzkU1wXxd9WeBkcOK7UxMKc8aEoYGpr8dKA1cbhKAP=s16000")` }}>
                <form className="form-default" method="POST" onSubmit={formik.handleSubmit}>
                    <div className="login-form">
                        <div className="logo-login">
                            <NavLink to="index.html"><img src="/resources/assets/img/logo/loder.png" alt="" /></NavLink>
                        </div>
                        <h2>Đăng ký thành viên</h2>
                        <div className="form-input">
                            <label htmlFor="name">Họ tên</label>
                            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} />
                            {formik.errors.name && formik.touched.name ? (
                                <div className="text-danger mt-1 p-1">{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Địa chỉ Email</label>
                            <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
                            {formik.errors.email && formik.touched.email ? (
                                <div className="text-danger mt-1 p-1">{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-input">
                                    <label htmlFor="name">Số điện thoại</label>
                                    <input type="text" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
                                    {formik.errors.phone && formik.touched.phone ? (
                                        <div className="text-danger mt-1 p-1">{formik.errors.phone}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-input">
                                    <label htmlFor="name">Địa chỉ</label>
                                    <input type="text" name="address" value={formik.values.address} onChange={formik.handleChange} />
                                    {formik.errors.address && formik.touched.address ? (
                                        <div className="text-danger mt-1 p-1">{formik.errors.address}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className="form-input">
                            <label htmlFor="name">Tên đăng nhập</label>
                            <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
                            {formik.errors.username && formik.touched.username ? (
                                <div className="text-danger mt-1 p-1">{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-input">
                                    <label htmlFor="name">Mật khẩu</label>
                                    <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                                    {formik.errors.password && formik.touched.password ? (
                                        <div className="text-danger mt-1 p-1">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-input">
                                    <label htmlFor="name">Xác nhận mật khẩu</label>
                                    <input type="password" name="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} />
                                    {formik.errors.confirm_password && formik.touched.confirm_password ? (
                                        <div className="text-danger mt-1 p-1">{formik.errors.confirm_password}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className="form-input pt-30">
                            <input type="submit" name="submit" value="Đăng ký" />
                        </div>
                        <NavLink to="/login" className="registration">Đăng nhập</NavLink>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Register;