import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            {/* <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
            <main className="login-body" style={{ backgroundImage: `url("https://blogger.googleusercontent.com/img/a/AVvXsEhGFHFelpzpZBR3QzhtsATlCgmneBcCYr9i-bA75tEGWqVVdWcyzGBg1U9s253yENbGXseHnO0MC75tsbz-2b_-L7ONHts77KY4KyxqMG0RaZ1unO_HxZt98vf1BjvexRWvSP635WFNbXNqKFSzkU1wXxd9WeBkcOK7UxMKc8aEoYGpr8dKA1cbhKAP=s16000")` }}>
                <form className="form-default" action="login-bg.mp4" method="POST">
                    <div className="login-form">
                        <div className="logo-login">
                            <NavLink to="index.html"><img src="/resources/assets/img/logo/loder.png" alt="" /></NavLink>
                        </div>
                        <h2>Đăng ký thành viên</h2>

                        <div className="form-input">
                            <label htmlFor="name">Họ tên</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Địa chỉ Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Password</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Confirm Password</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="form-input pt-30">
                            <input type="submit" name="submit" value="Registration" />
                        </div>
                        <NavLink to="/login" className="registration">login</NavLink>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Register;