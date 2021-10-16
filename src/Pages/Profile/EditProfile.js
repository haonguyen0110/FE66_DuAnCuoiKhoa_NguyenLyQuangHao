import { Form, Input, Button, Select } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import Banner from '../../Components/Banner/Banner'
import { capNhatThongTinNguoiDungAction } from '../../Redux/actions/QuanLyNguoiDungAction';
import { GROUPID, USER_LOGIN } from '../../Util/Settings/config';
import WOW from 'wowjs'
export default function EditProfile() {

    const { Option } = Select;
    const layout = {
        labelCol: {
            span: 3,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const handleChangeSelect = (value) => {

        formik.setFieldValue('maLoaiNguoiDung', value)
    }
    const dispatch = useDispatch()
    const profile = JSON.parse(localStorage.getItem(USER_LOGIN));
    const formik = useFormik({
        initialValues: {
            taiKhoan: profile.taiKhoan,
            matKhau: '',
            email: profile.email,
            soDt: profile.soDT,
            maNhom: '',
            maLoaiNguoiDung: profile.maLoaiNguoiDung,
            hoTen: profile.hoTen

        },
        onSubmit: (values) => {
            values.maNhom = GROUPID
            console.log('values', values)
            dispatch(capNhatThongTinNguoiDungAction(values))
           
        }
    })
    useEffect(()=>{
        new WOW.WOW({
            live: false
        }).init();
    },[])
    if (!localStorage.getItem(USER_LOGIN)) {
        alert('Bạn không có quyền truy cập vào trang này !')
        return <Redirect to='/' />
    }
  
    return (
        <div>
            <div>
                <Banner />
            </div>
            <div className=" px-5 py-24 mx-auto rapChieu">
                <div className="container wow fadeInUp ">
                    <h1 className="text-2xl font-bold mb-5 text-white">Cập nhật thông tin người dùng</h1>
                    <Form {...layout}
                        onSubmitCapture={formik.handleSubmit}
                    >
                        <Form.Item
                            name="taiKhoan"
                            label={<span className="text-white">Tài khoản</span>}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            onChange={formik.handleChange}

                            initialValue={profile.taiKhoan}
                        >
                            <Input disabled />
                        </Form.Item>
                        <Form.Item
                            name="matKhau"
                            label={<span className="text-white">Mật khẩu</span>}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            onChange={formik.handleChange}
                        >
                            <Input type="password" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label={<span className="text-white">Email</span>}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            onChange={formik.handleChange}
                            initialValue={profile.email}
                        >
                            <Input type="email" />
                        </Form.Item>
                        <Form.Item
                            name="hoTen"
                            label={<span className="text-white">Họ và tên</span>}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            onChange={formik.handleChange}
                            initialValue={profile.hoTen}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="soDt"
                            label={<span className="text-white">Số điện thoại</span>}
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            onChange={formik.handleChange}
                            initialValue={profile.soDT}
                        >
                            <Input type="number" />
                        </Form.Item>
                     

                        <Form.Item {...tailLayout}>
                            <button className="mr-5 btn__movie movie__active text-white hover:shadow-2xl" type="submit">
                                Cập nhật
                            </button>


                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}
