import axios, { AxiosError, AxiosInstance } from 'axios'
import HttpStatusCode from './StatusCode.enum'
import { Slide, toast } from 'react-toastify'
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:5000/api/v1',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.response.use(
      function (response) {
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast(message, {
            style: {
              backgroundColor: ' #ffff',
              color: 'black',
              borderRadius: '5px',
              fontSize: '14px'
            },
            autoClose: 2000,
            transition: Slide,
            theme: 'colored'
          })
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
