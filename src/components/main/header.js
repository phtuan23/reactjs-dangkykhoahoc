import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserAuth from '../auth/User';



const Header = () => {
    const _user = UserAuth.getAuth();
    const [user, setUser] = useState(_user != null ? _user : null);

    const logout = () => {
        UserAuth.logout();
        setUser();
    }

    return (
        <header>
            <div className="header-area header-transparent">
                <div className="main-header ">
                    <div className="header-bottom  header-sticky">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo">
                                        <NavLink to="/"><img src="/resources/assets/img/logo/logo.png" alt="" /></NavLink>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li className="active" ><NavLink to="/">Trang chủ</NavLink></li>
                                                    <li><NavLink to="/course">Khoá học</NavLink></li>
                                                    <li><NavLink to="/about">Về chúng tôi</NavLink></li>
                                                    <li><NavLink to="/blog">Bài viết</NavLink></li>
                                                    <li><NavLink to="/contact">Liên hệ</NavLink></li>
                                                    <li><NavLink to="#">Góc sinh viên</NavLink>
                                                        <ul className="submenu">
                                                            <li><NavLink to="/check-mark">Tra cứu điểm</NavLink></li>
                                                        </ul>
                                                    </li>
                                                    {
                                                        user != null ? (
                                                            <>
                                                                <li className="button-header"><NavLink to="/profile" className="btn">{user.name}</NavLink>
                                                                    <ul className="submenu">
                                                                        <li style={{ cursor: "pointer" }} onClick={logout}>Đăng xuất</li>
                                                                    </ul>
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <li className="button-header margin-left "><NavLink to="/register" className="btn">Đăng ký</NavLink></li>
                                                                <li className="button-header"><NavLink to="/login" className="btn btn3">Đăng nhập</NavLink></li>
                                                            </>
                                                        )
                                                    }
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;