import React, { useState } from "react";
import StudentService from "../../services/Student.service";
import { useFormik } from "formik";
import * as Yup from 'yup';

const CheckScore = () => {
    const [err, setErr] = useState("");
    const [student, setStudent] = useState();

    const formik = useFormik({
        initialValues: {
            studentCode: ""
        },
        validationSchema: Yup.object().shape({
            studentCode: Yup.string().required("Vui lòng nhập mã sinh viên")
        }),
        onSubmit: async (values) => {
            let data = await StudentService.checkMark(values.studentCode);
            if (data.studentCode && data != null) {
                setStudent(data)
            } else {
                setErr("Không tìm thấy sinh viên có mã " + values.studentCode);
                setStudent(null)
            }
        }
    });

    const StudentInfo = () => {
        if (student && student !== null) {
            return (
                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-3">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Mã sinh viên:</th>
                                        <td className="font-weight-bold pl-3">{student.studentCode}</td>
                                    </tr>
                                    <tr>
                                        <th>Họ tên:</th>
                                        <td className="font-weight-bold pl-3">{student.name}</td>
                                    </tr>

                                    <tr>
                                        <th>Lớp:</th>
                                        <td className="font-weight-bold pl-3">{student.classroom.name}</td>
                                    </tr>
                                    <tr>
                                        <th>Giới tính:</th>
                                        <td className="font-weight-bold pl-3">{student.gender ? 'Nam' : 'Nữ'}</td>
                                    </tr>
                                    <tr>
                                        <th>Ngày sinh:</th>
                                        <td className="font-weight-bold pl-3">{student.birthday}</td>
                                    </tr>
                                    <tr>
                                        <th>Địa chỉ:</th>
                                        <td className="font-weight-bold pl-3">{student.address}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <table className="table">
                            <thead>
                                <tr style={{ backgroundColor: "#28a745", color: "white" }}>
                                    <th scope="col">Tên môn học</th>
                                    <th scope="col" className="text-center">Điểm thi</th>
                                    <th scope="col" className="text-center">Điểm tối đa</th>
                                    <th scope="col" className="text-center">Kết quả</th>
                                </tr>
                            </thead>
                            <tbody>
                                {student.scores.map(score => {
                                    return (
                                        <tr key={score.id}>
                                            <th>{score.subject.name}</th>
                                            <td className="text-center">{score.score}</td>
                                            <td className="text-center">10</td>
                                            <td className="text-center" style={{ color: score.score < 5 ? 'red' : 'inherit' }}>{score.score < 5 ? 'Không đạt' : 'Đạt'}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div>
            <div id="title" className="text-center p-3">
                <h1 className="text-success">TRA CỨU ĐIỂM THI</h1>
            </div>
            <div id="header" className="container">
                <form onSubmit={formik.handleSubmit}>
                    <div className="col-md-8">
                        <div className="form-group row">
                            <label htmlFor="id" className="col-md-3 col-form-label font-weight-bold">Mã sinh viên</label>
                            <div className="col-md-4">
                                <input type="text" className="form-control form-control-lg" value={formik.values.studentCode} placeholder="Mã sinh viên" name="studentCode" onChange={formik.handleChange} />
                                {
                                    formik.errors.studentCode && formik.touched.studentCode ? (
                                        <div >
                                            <p className="text-block text-danger mt-1">{formik.errors.studentCode}</p>
                                        </div>
                                    ) : <p className="text-block text-danger mt-1">{err}</p>
                                }
                            </div>
                            <div className="col-md-2">
                                <button type="submit" className="btn btn-success mb-2 btn-sm">Tra cứu</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            <StudentInfo />
        </div >
    )

}

export default CheckScore;