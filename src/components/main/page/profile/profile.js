import React, { useState, useEffect } from 'react';
import './profile.css';
import jQuery from 'jquery';
import UserService from '../../../../services/User.service';
import Swal from 'sweetalert2';

const Profile = (props) => {
    let id = props.user.id;
    const [user, setUser] = useState({});
    const detail = async () => {
        let res = await UserService.detail(id);
        setUser(res.data);
        console.log(res)
    }
    useEffect(() => {
        detail();
    }, []);

    const { name, email, phone, address, username, image } = user;

    const chooseImg = () => {
        jQuery("#file").click();
    }

    const updateAvt = async (event) => {
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append("file", file);
        formData.append("id", id);
        let res = await UserService.updateAvt(formData);
        if (res.data === 200) {
            Swal.fire("Cập nhật thành công", "", "success");
            detail();
        };
    }


    return (
        <div>
            <div className="container emp-profile">
                <form method="post" id="form" encType="multipart/form-data">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-img">
                                <img src={image} alt={image} id="image" />
                                <div className="file btn btn-lg btn-primary" onClick={chooseImg}>
                                    Đổi ảnh
                                    <input type="file" name="file" id="file" onChange={event => updateAvt(event)} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h5>
                                    {name}
                                </h5>
                                <h6>
                                    Web Developer and Designer
                                </h6>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông tin cá nhân</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-8">
                            <div className="tab-content profile-tab" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Tên đăng nhập</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{username}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Họ tên</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{email}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Số điện thoại</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{phone}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Địa chỉ</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}


export default Profile;