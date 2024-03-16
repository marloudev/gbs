import React, { useEffect, useState } from 'react'
import store from './../../../../../store/store'
import { getSalesThunk } from '../redux/sales-thunk';
import { useDispatch, useSelector } from 'react-redux';
import AdministratorShowSalesItemSection from './administrator-show-sales-item-section';
import moment from 'moment';
export default function AdministratorSalesTableSection() {
    const [page, setPage] = useState(1)
    const { sales } = useSelector((state) => state.sales);
    const [searching, setSearching] = useState('')
   

    useEffect(() => {
        store.dispatch(getSalesThunk(page, searching))
    }, [page]);

    function backPage() {
        setPage(page - 1)
    }
    function nextPage() {
        setPage(page + 1)
    }

    function submitSearch(e) {
        e.preventDefault()
        store.dispatch(getSalesThunk(page, searching))
    }
    return (
        <div>
            <section className="container px-2 my-4 mx-auto">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <h2 className="text-lg font-medium text-gray-800 ">List of Sales</h2>

                            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full">240 vendors</span>
                        </div>
                        {/* <p className="mt-1 text-sm text-gray-500  text-gray-300">
                            Selected bread recipe you wanted to make.
                        </p> */}
                    </div>

                    <div className="flex items-center mt-4 gap-x-3">
                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_3098_154395)">
                                    <path d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3098_154395">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span>Import</span>
                        </button> 

                        <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span>Add vendor</span>
                        </button> 
                    </div>
                </div>

                <div className="mt-6 md:flex md:items-center md:justify-between">
                    {/* <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:border-gray-700 ">
                        <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm  dark:text-gray-300">
                            Daily
                        </button>

                        <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-800  text-gray-300 hover:bg-gray-100">
                            Weekly
                        </button>

                        <button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm  hover:bg-gray-800  text-gray-300 hover:bg-gray-100">
                            Monthly
                        </button>
                    </div> */}

                    <form
                        onSubmit={submitSearch}
                        className="relative flex items-center mt-4 md:mt-0">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-3 text-gray-400 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>

                        <input type="text"
                            onInput={(e) => setSearching(e.target.value)}
                            placeholder="Search" className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        <button
                            type='submit'
                            className='p-2 bg-red-500 text-white hover:bg-red-400 mx-3 rounded-lg'>Search</button>
                    </form>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 ">
                                    <thead className="bg-gray-50 ">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                <button className="flex items-center gap-x-3 focus:outline-none">
                                                    <span>Sales ID</span>

                                                    <svg className="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" strokeWidth="0.1" />
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
                                                    </svg>
                                                </button>
                                            </th>

                                            <th scope="col" className="px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Subtotal
                                            </th>

                                            <th scope="col" className="px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Discount
                                            </th>
                                            <th scope="col" className="px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Tax
                                            </th>
                                            <th scope="col" className="px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Change
                                            </th>
                                            <th scope="col" className="px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Tenders
                                            </th>
                                            <th scope="col" className="px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Total
                                            </th>
                                            <th scope="col" className="px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Sold At
                                            </th>
                                            <th scope="col" className="px-2 py-2 text-sm font-normal text-left rtl:text-right text-gray-500">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 ">
                                        {
                                            sales.map((res, i) => {
                                                return <tr key={i}>
                                                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                        <div>
                                                            <h2 className="font-medium text-gray-800">GB-{res.receipt_id}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-2 py-2 text-sm font-medium whitespace-nowrap">
                                                        <h2 className="font-medium text-gray-800">{res.subtotal}</h2>
                                                    </td>
                                                    <td className="px-2 py-2 text-sm whitespace-nowrap">

                                                        <h2 className="font-medium text-gray-800">{res.discount}</h2>
                                                    </td>
                                                    <td className="px-2 py-2 text-sm whitespace-nowrap">

                                                        <h2 className="font-medium text-gray-800">{res.tax}</h2>
                                                    </td>

                                                    <td className="px-2 py-2 text-sm whitespace-nowrap">

                                                        <h2 className="font-medium text-gray-800">{res.change}</h2>
                                                    </td>

                                                    <td className="px-2 py-2 text-sm whitespace-nowrap">

                                                        <h2 className="font-medium text-gray-800">{res.tenders}</h2>
                                                    </td>
                                                    <td className="px-2 py-2 text-sm whitespace-nowrap">

                                                        <h2 className="font-medium text-gray-800">{res.total}</h2>
                                                    </td>
                                                    <td className="px-2 py-2 text-sm whitespace-nowrap">
                                                        {moment(res.created_at).format('LLL')}
                                                    </td>
                                                    <td className="px-2 py-2 text-sm whitespace-nowrap">
                                                        <AdministratorShowSalesItemSection id={res.id} data={res} />
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>

                            <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
                                <div className="text-sm text-gray-500 ">
                                    Page <span className="font-medium text-gray-700 ">1 of 10</span>
                                </div>

                                <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
                                    <button
                                        onClick={backPage}
                                        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                        </svg>

                                        <span>
                                            previous
                                        </span>
                                    </button>

                                    <button
                                        onClick={nextPage}
                                        className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 ">
                                        <span>
                                            Next
                                        </span>

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
