import React, { useEffect } from 'react'
import Toastify from '../components/toastify';
import { get_account_service } from '../../services/account-service';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/app-slice';
import { router } from '@inertiajs/react';

export default function CashierLayout({children}) {
  const dispatch = useDispatch()
  useEffect(() => {
    get_account_service()
      .then(res => {
        if (res.role == 'admin') {
          router.visit('/administrator/dashboard')
        }
        dispatch(setUser(res))
      })
  }, []);
  return (
    <div className='flex'>
      <Toastify />
      {children}
    </div>
  )
}
