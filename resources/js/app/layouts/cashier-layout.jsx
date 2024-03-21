import React, { useEffect } from 'react'
import Toastify from '../components/toastify';

export default function CashierLayout({children}) {

  return (
    <div className='flex'>
      <Toastify />
      {children}
    </div>
  )
}
