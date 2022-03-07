import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import UserAuth from '../auth/User';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    username: "",
    password: ""
}

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Vui lòng nhập tên đăng nhập"),
    password: Yup.string().required("Vui lòng nhập mật khẩu")
})

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const bg_img = `url("https://blogger.googleusercontent.com/img/a/AVvXsEhGFHFelpzpZBR3QzhtsATlCgmneBcCYr9i-bA75tEGWqVVdWcyzGBg1U9s253yENbGXseHnO0MC75tsbz-2b_-L7ONHts77KY4KyxqMG0RaZ1unO_HxZt98vf1BjvexRWvSP635WFNbXNqKFSzkU1wXxd9WeBkcOK7UxMKc8aEoYGpr8dKA1cbhKAP=s16000")`;
    const [err, setErr] = useState("");
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async values => {
            let res = await UserAuth.login(values);
            if (res.data !== "") {
                UserAuth.saveAuth(res.data);
                history.push("/")
            } else {
                setErr("Tên đăng nhập hoặc mật khẩu không đúng")
            }
        }
    })



    return (
        <div>
            <main className="login-body" style={{ backgroundImage: bg_img }}>
                <form onSubmit={formik.handleSubmit} className="form-default" method="POST">

                    <div className="login-form">
                        <div className="logo-login">
                            <NavLink to="/"><img src="/resources/assets/img/logo/loder.png" alt="" /></NavLink>
                        </div>
                        <h2 className="text-warning">{location.props ? location.props.message : null}</h2>
                        {err !== "" ? (
                            <h3 className="text-danger font-weight-bold">{err}</h3>
                        ) : null}
                        <h2 >Đăng nhập</h2>
                        <div className="form-input">
                            <label htmlFor="name">Tên đăng nhập</label>
                            <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} />
                            {formik.errors.username && formik.touched.username ? (
                                <div className="text-danger mt-1 p-1">{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Mật khẩu</label>
                            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                            {formik.errors.password && formik.touched.password ? (
                                <div className="text-danger mt-1 p-1">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="form-input pt-30">
                            <input type="submit" name="submit" value="login" />
                            <NavLink to="/register" className="registration">Đăng ký</NavLink>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Login;