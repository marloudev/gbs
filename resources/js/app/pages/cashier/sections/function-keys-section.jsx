import React, { useEffect } from 'react'
import CashierLogoutSection from './cashier-logout-section'
import CashierDiscountModal from './cashier-discount-modal'
import CashierAmountSection from '../../search/sections/search-section'
import { Link, router } from '@inertiajs/react'

export default function FunctionKeysSection({inputRef}) {
  useEffect(() => {
    const handleKeyPress = (event) => {
        if ((event.key === 'I' || event.key === 'i')) {
          router.visit('/cashier/search')
        }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
        window.removeEventListener("keydown", handleKeyPress);
    };
}, []);
  return (
    <div className="grid grid-cols-4 gap-4 h-full p-4 border-t">
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">P</h1>
        <div className='text-white'>
          PAY
        </div>
      </button>

      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">F</h1>
        <div className='text-white'>
          FUCOS
        </div>
      </button>
      {/* <CashierAmountSection /> */}
      <Link
        href='/cashier/search'
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">I</h1>
        <div className='text-white'>
          ITEM
        </div>
      </Link>

      <CashierDiscountModal 
      inputRef={inputRef}
      />

      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">E</h1>
        <div className='text-white'>
          EDIT
        </div>
      </button>
      {/* <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">E</h1>
        <div className='text-white'>
          CHANGE PRICE
        </div>
      </button> */}

      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">C</h1>
        <div className='text-white'>
          CANCEL
        </div>
      </button>
      <button
        className="flex flex-col items-center justify-center bg-red-500">
        <h1 className="text-white text-5xl leading-tight font-black">V</h1>
        <div className='text-white'>
          VOID
        </div>
      </button>

      <CashierLogoutSection />
    </div>
  )
}
