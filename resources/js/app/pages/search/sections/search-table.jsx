import React from 'react'
import { useSelector } from 'react-redux';
import SearchAddProduct from './search-add-product';

export default function SearchTable() {
    const { cart } = useSelector((state) => state.cashier);
    const { data } = useSelector((state) => state.search);
    return (
        <section className="container mx-auto">
            <div className="flex flex-col ">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className=" inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-auto h-[66.8vh] border border-gray-200  ">
                            <table className="min-w-full relative divide-y divide-gray-200 ">
                                <thead className="bg-red-500 sticky top-0 text-white ">
                                    <tr>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Item ID
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Description
                                        </th>
                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Price
                                        </th>

                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white ">
                                            Action
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200  ">

                                    {
                                        data.map((res, i) => {
                                            return <tr
                                                id={res.randomId}
                                                // ref={(el) => (myElementRefs.current[i] = el)}
                                                // className={`${selectedRow === i ? 'bg-gray-300' : ''}`}
                                                key={i}
                                            >
                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">
                                                            #{res.id}
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <h2 className="font-medium text-gray-800 ">
                                                        {res.description}
                                                    </h2>
                                                </td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div>
                                                        <h2 className="font-medium text-gray-800 ">
                                                            ₱ {res.price}
                                                        </h2>
                                                    </div>
                                                </td>


                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className='flex gap-4'>
                                                       <SearchAddProduct
                                                       cart={cart}
                                                       data={res}
                                                       />
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
