/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useFormType } from '../Register/Register'

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<useFormType>() //lay ra 3 cai quan trong nhat

  const onSubmit = handleSubmit((data) => {
    // console.log(data)
  })

  return (
    <div className='bg-orange-300 py-11'>
      <div className='max-w-7xl px-4 mx-auto'>
        <div className='flex h-auto justify-center'>
          <div className='pr-7 sm:hidden md:hidden lg:block'>
            <img
              src='https://i.pinimg.com/474x/0b/18/15/0b18157ed9d98cd5526c5844013dca00.jpg'
              alt=''
              className='w-full h-auto object-cover rounded-3xl md:hidden sm:hidden lg:block'
            />
          </div>
          <form action='' className='w-1/2 rounded-3xl  bg-white text-center px-8 py-5 shadow-sm' onSubmit={onSubmit}>
            <div className='text-black mb-7 text-3xl font-bold'>Đăng nhập</div>
            <div className='mt-3'>
              <input
                type='email'
                className='p-3 w-full outline-none border rounded-full border-gray-300 focus:border-gray-950 focus:shadow-sm'
                placeholder='Email'
              />
              <div className='mt-1 text-red-700 min-h-[1rem] text-sm ml-2'></div>
            </div>
            <div className='mt-3'>
              <input
                type='password'
                className='p-3 w-full rounded-full outline-none border border-gray-300 focus:border-gray-950 focus:shadow-sm'
                placeholder='password'
                name='password'
                autoComplete='on'
              />
              <div className='mt-1 text-red-700 min-h-[1rem] text-sm ml-2'></div>
            </div>
            <button
              type='submit'
              className='w-full mt-2 px-4 py-3 rounded-full border text-center bg-amber-400 hover:bg-black hover:text-amber-400'
            >
              ĐĂNG NHẬP
            </button>
            <div className='mt-3 flex justify-between items-center text-sm '>
              <Link to='ForgotPassword'>
                <p className='text-blue-800'>Quên mật khẩu ?</p>
              </Link>
              <Link to='/register'>
                <p className='text-blue-800'>Đăng ký</p>
              </Link>
            </div>
            <div className='my-2 text-slate-500'>Hoặc</div>
            <Link
              to='https://google.com'
              className='flex items-center justify-center border-2 border-gray-300 px-4 py-3 rounded-full'
            >
              <div className='w-7 text-center mr-2'>
                <img
                  className='w-full'
                  src='https://th.bing.com/th?id=OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
                  alt=''
                />
              </div>
              <p>Google</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
