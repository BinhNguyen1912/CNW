import React, { ReactNode } from 'react'
import FooterCommom from 'src/components/folder'
import RegisterHeader from 'src/components/RegisterHeader'
interface props {
  children?: ReactNode
}
export default function RegisterLayout({ children }: props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <FooterCommom />
    </div>
  )
}
