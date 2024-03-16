import { usePage } from '@inertiajs/react'
import React from 'react'

export default function SideBarComponent({ icon, href }) {
    const { url } = usePage()

    return (
        <>
        
            <Link
                to={href}
                className={`${url.split('/')[2] == href.split('/')[2] ? 'bg-red-500 text-white' : 'hover:bg-red-400 hover:text-white'} flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded `} href="#">
                {icon}
            </Link>
        </>
    )
}
