import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { GROUPID } from '../../../../Util/Settings/config';
import { themNguoiDungAction } from '../../../../Redux/actions/QuanLyNguoiDungAction';
export default function AddUser() {

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
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: '',
            maLoaiNguoiDung: '',
            hoTen: ''

        },
        onSubmit: (values) => {
            values.maNhom = GROUPID
            console.log('values', values)
            dispatch(themNguoiDungAction(values))

        }
    })


    return ( <
        div >
        <
        h1 className = "text-2xl font-bold mb-5" > Thêm người dùng < /h1> <
        Form {...layout }
        onSubmitCapture = { formik.handleSubmit } >
        <
        Form.Item name = "taiKhoan"
        label = "Tài khoản"
        rules = {
            [{
                required: true,
            }, ]
        }
        onChange = { formik.handleChange } >
        <
        Input / >
        <
        /Form.Item> <
        Form.Item name = "matKhau"
        label = "Mật khẩu"
        rules = {
            [{
                required: true,
            }, ]
        }
        onChange = { formik.handleChange } >
        <
        Input type = "password" / >
        <
        /Form.Item> <
        Form.Item name = "email"
        label = "Email"
        rules = {
            [{
                type: 'email',
                required: true,
            }, ]
        }
        onChange = { formik.handleChange } >
        <
        Input type = "email" / >
        <
        /Form.Item> <
        Form.Item name = "hoTen"
        label = "Họ và tên"
        rules = {
            [{
                required: true,
            }, ]
        }
        onChange = { formik.handleChange } >
        <
        Input / >
        <
        /Form.Item> <
        Form.Item name = "soDt"
        label = "Số điện thoại"
        rules = {
            [{
                required: true,
            }, ]
        }
        onChange = { formik.handleChange } >
        <
        Input type = "number" / >
        <
        /Form.Item> <
        Form.Item name = "maLoaiNguoiDung"
        label = "Loại người dùng"
        rules = {
            [{
                required: true,
            }, ]
        } >
        <
        Select placeholder = "Chọn loại người dùng"
        onChange = { handleChangeSelect }
        allowClear >
        <
        Option value = "KhachHang" > Khách Hàng < /Option> <
        Option value = "QuanTri" > Quản trị < /Option>

        <
        /Select> <
        /Form.Item>

        <
        Form.Item {...tailLayout } >
        <
        button className = "mr-5 btn__movie movie__active text-white hover:shadow-2xl"
        type = "submit" >
        Thêm người dùng <
        /button>


        <
        /Form.Item> <
        /Form> <
        /div>
    )
}