import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <main className="login-body" style={{ backgroundImage: `url("https://blogger.googleusercontent.com/img/a/AVvXsEhGFHFelpzpZBR3QzhtsATlCgmneBcCYr9i-bA75tEGWqVVdWcyzGBg1U9s253yENbGXseHnO0MC75tsbz-2b_-L7ONHts77KY4KyxqMG0RaZ1unO_HxZt98vf1BjvexRWvSP635WFNbXNqKFSzkU1wXxd9WeBkcOK7UxMKc8aEoYGpr8dKA1cbhKAP=s16000")` }}>
                <form className="form-default" method="POST">

                    <div className="login-form">
                        <div className="logo-login">
                            <NavLink to="/"><img src="/resources/assets/img/logo/loder.png" alt="" /></NavLink>
                        </div>
                        <h2>Đăng nhập</h2>
                        <div className="form-input">
                            <label htmlFor="name">Tên đăng nhập</label>
                            <input type="text" name="username" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Mật khẩu</label>
                            <input type="password" name="password" />
                        </div>
                        <div className="form-input pt-30">
                            <input type="submit" name="submit" value="login" />
                            {/* <NavLink to="#" className="forget">Forget Password</NavLink> */}
                            <NavLink to="/register" className="registration">Đăng ký</NavLink>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Login;