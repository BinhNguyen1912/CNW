/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RegisterOptions, FieldValues, Path, UseFormGetValues } from 'react-hook-form'
import { useFormType } from 'src/pages/Register/Register'
import * as yup from 'yup'

export type Rules<T extends FieldValues> = { [K in keyof T]?: RegisterOptions<T, Path<T> & string> }

// Định nghĩa rules dựa trên interface dữ liệu của form

export const GetRules = (getValues?: UseFormGetValues<any>): Rules<useFormType> => ({
  email: {
    required: {
      value: true,
      message: 'Email không được để trống!'
    },
    pattern: {
      value: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
      message: 'Email không đúng định dạng'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Passsword không được để trống!'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu là 6-15 từ!'
    },
    maxLength: {
      value: 15,
      message: 'Độ dài tối thiểu là 6-15 từ!'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại để xác nhận mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu là 6-15 từ!'
    },
    maxLength: {
      value: 15,
      message: 'Độ dài tối thiểu là 6-15 từ!'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Không khớp với mật khẩu!'
        : undefined
  },
  name: {
    required: {
      value: true,
      message: 'Tên không được để trống !'
    }
  },
  phone: {
    required: {
      value: true,
      message: 'Số điện thoại không được để trống !'
    }
  }
})

export const Schema = yup.object({
  // email: yup.string().email('Email không đúng định dạng!').min(6, 'Độ dài tối thiểu là 6-30 từ!').max
})
