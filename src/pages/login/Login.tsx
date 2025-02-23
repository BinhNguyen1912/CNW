import React from 'react'

export default function Login() {
  return (
    <div className='bg-orange-300 p-3'>
      <div className='max-w-7xl px-4 mx-auto'>
        <div className='flex justify-center items-center'>
          <div className='max-w-sm p-6'>
            <img
              src='https://i.pinimg.com/474x/7e/ed/14/7eed140453db365565e87ea4d303af87.jpg'
              alt=''
              className='w-full h-auto object-cover rounded-3xl'
            />
          </div>
          <form action='' className='rounded-xl max-w-md bg-white px-8 py-5 shadow-sm'>
            <div className='text-amber-100 text-3xl font-bold'>Đăng nhập</div>
            <div className='mt-3'>
              <input
                type='email'
                className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
                placeholder='Email'
                name='email'
              />
              <div className='mt-1 text-red-700 min-h-[1rem] text-sm ml-2'></div>
            </div>
            <div className='mt-3'>
              <input
                type='password'
                className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 focus:shadow-sm rounded-sm'
                placeholder='password'
                name='password'
              />
              <div className='mt-1 text-red-700 min-h-[1rem] text-sm ml-2'></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
