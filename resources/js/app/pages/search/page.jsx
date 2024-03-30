import React from 'react'
import SearchSection from './sections/search-section'
import SearchTable from './sections/search-table'
import { Link } from '@inertiajs/react'

export default function SearchPage() {
    
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <Link
                href='/cashier'
                // onClick={() => setOpen(true)}
                className="flex flex-col items-center p-5 justify-center hover:bg-red-600 bg-red-500">
                <div className='text-white'>
                    BACK
                </div>
            </Link>
            <div className="bg-white flex flex-col gap-4 px-4 pb-4 pt-5">
                <SearchSection />
                <SearchTable />
            </div>
        </div>
    )
}
