import React from 'react'

export default function Login() {
  return (
    <div className='bg-orange-300 py-11'>
      <div className='max-w-7xl px-4 mx-auto'>
        <div className='flex justify-center   '>
          <div className='max-w-sm pr-7 h-auto'>
            <img
              src='https://i.pinimg.com/474x/7e/ed/14/7eed140453db365565e87ea4d303af87.jpg'
              alt=''
              className='w-full h-auto object-cover rounded-3xl'
            />
          </div>
          <form action='' className='w-1/2 rounded-xl  bg-white text-center px-8 py-5 shadow-sm'>
            <div className='text-black mb-7 text-3xl font-bold'>Đăng nhập</div>
            <div className='mt-3'>
              <input
                type='email'
                className='p-3 w-full outline-none border rounded-full border-gray-300 focus:border-gray-950 focus:shadow-sm'
                placeholder='Email'
                name='email'
              />
              <div className='mt-1 text-red-700 min-h-[1rem] text-sm ml-2'></div>
            </div>
            <div className='mt-3'>
              <input
                type='password'
                className='p-3 w-full rounded-full outline-none border border-gray-300 focus:border-gray-950 focus:shadow-sm'
                placeholder='password'
                name='password'
              />
              <div className='mt-1 text-red-700 min-h-[1rem] text-sm ml-2'></div>
            </div>
            <button className='w-full mt-2 px-4 py-3 rounded-full border text-center bg-amber-400'>ĐĂNG NHẬP</button>
            <div className='mt-3 flex justify-between items-center text-sm '>
              <a href='#'>
                <p className='text-blue-800'>Quên mật khẩu ?</p>
              </a>
              <a href='#'>
                <p className='text-blue-800'>Đăng ký</p>
              </a>
            </div>
            <button className='w-full mt-2 px-4 py-3 rounded-full border'>
              <div className='flex items-center justify-center'>
                <div className='w-7 text-center mr-2'>
                  <img
                    className='w-full'
                    src='https://th.bing.com/th?id=OIP.Fll7WPtNT6jrz1oBP8GbCgHaHj&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2'
                    alt=''
                  />
                </div>
                <p>Google</p>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
