import React from 'react'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../Redux/actions/QuanLyNguoiDungAction';
import * as Yup from 'yup'
export default function Register(props) {
    const dispatch = useDispatch();

    // const registerSchema = Yup.object({
    //     taiKhoan: Yup.string()
    //         .min(4, "Tên tài khoản quá ngắn! (Từ 4 -30 ký tự)")
    //         .max(30, "Tên tài khoản quá dài! (Từ 4 -30 ký tự)")
    //         .required("Trường này không thể để trống!"),
    //         email: Yup.string()
    //         .email("Email không hợp lệ")
    //         .required("Trường này không thể để trống!"),
    //         matKhau: Yup.string()
    //         .min(6, "Tối thiểu 6 ký tự!")
    //         .required("Trường này không thể để trống!"),
    //         soDT: Yup.number()
    //         .min(10,"Số điện thoại quá ngắn! (Tối thiểu 10 ký tự)")
    //         .required("Trường này không thể để trống!"),
    //         hoTen: Yup.string()
    //         .min(10,"Họ và tên không hợp lệ (Tối thiểu 10 ký tự)")
    //         .required("Trường này không thể để trống!"),
    // })

    const formik = useFormik({
        initialValues: {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            hoTen: ""
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string()
                .min(4, "Tên tài khoản quá ngắn! (Từ 4 -30 ký tự)")
                .max(30, "Tên tài khoản quá dài! (Từ 4 -30 ký tự)")
                .required("Trường này không thể để trống!"),
            email: Yup.string()
                .email("Email không hợp lệ")
                .required("Trường này không thể để trống!"),
            matKhau: Yup.string()
                .min(6, "Tối thiểu 6 ký tự!")
                .required("Trường này không thể để trống!"),
           
            hoTen: Yup.string()
                .min(6, "Họ và tên không hợp lệ (Tối thiểu 6 ký tự)")
                .required("Trường này không thể để trống!"),
        }),
        onSubmit: values => {
            console.log(values)
            const action = dangKyAction(values);
            dispatch(action);
            
        },
    });


    return (
        <div className="container " >
            <div className="flex justify-center register ">
                <div className="w-full max-w-md p-8  rounded-xl">
                    <h1 className="text-4xl font-bold text-center text-green-600">Đăng ký</h1>

                    <form onSubmit={formik.handleSubmit} className="space-y-6 text-black-400  ">

                        <div className="space-y-1 text-sm">
                            <label htmlFor="fullname" className="block text-green-600 font-bold text-xl">Họ và tên</label>
                            <input onChange={formik.handleChange} type="text" name="hoTen" id="hoTen" placeholder="Vui lòng nhập họ tên" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                            {formik.errors.hoTen && formik.touched.hoTen && (
                                <p className="text-red-500">{formik.errors.hoTen}</p>
                            )}
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-green-600 font-bold text-xl">Tài khoản</label>
                            <input onChange={formik.handleChange} type="text" name="taiKhoan" id="username" placeholder="Vui lòng nhập tên đăng nhập" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                            {formik.errors.taiKhoan && formik.touched.taiKhoan && (
                                <p className="text-red-500">{formik.errors.taiKhoan}</p>
                            )}
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-green-600 font-bold text-xl">Email</label>
                            <input onChange={formik.handleChange} type="email" name="email" id="email" placeholder="Vui lòng nhập email" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                            {formik.errors.email && formik.touched.email && (
                                <p className="text-red-500">{formik.errors.email}</p>
                            )}
                        </div>

                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-green-600 font-bold text-xl">Mật khẩu</label>
                            <input onChange={formik.handleChange} type="password" name="matKhau" id="password" placeholder="Vui lòng nhập mật khẩu" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                            {formik.errors.matKhau && formik.touched.matKhau && (
                                <p className="text-red-500">{formik.errors.matKhau}</p>
                            )}
                        </div>


                        <div className="space-y-1 text-sm">
                            <label htmlFor="phoneNumber" className="block text-green-600 font-bold text-xl">Số điện thoại</label>
                            <input onChange={formik.handleChange} type="number" name="soDt" id="soDt" placeholder="Vui lòng nhập số điện thoại" className="w-full px-4 py-3 rounded-md dark:border-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100" />
                            {formik.errors.soDt && formik.touched.soDt && (
                                <p className="text-red-500">{formik.errors.soDt}</p>
                            )}
                        </div>


                        <button type="submit" className="block w-full p-3 text-center btn__movie movie__active text-white">Đăng ký</button>


                    </form>

                </div>
            </div>
        </div>
    )
}
