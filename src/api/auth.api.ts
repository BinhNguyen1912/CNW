import { authRespone } from 'src/types/auth.type'
import http from 'src/Until/Http'
const auth = '/auth'
export const registerByUser = (body: { email: string; password: string; phone: string; name: string }) => {
  return http.post<authRespone>(auth + '/registerByUserr', body)
}
